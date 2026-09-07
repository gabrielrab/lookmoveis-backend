const { spawn } = require('child_process');

const sucraseNode = require.resolve('sucrase/bin/sucrase-node');
const commands = [
  ['server', './bin/server.js'],
  ['queue', './src/queue.js'],
];

const children = commands.map(([name, script]) => {
  const child = spawn(process.execPath, [sucraseNode, script], {
    stdio: 'inherit',
  });

  child.processName = name;
  return child;
});

let shuttingDown = false;

function shutdown(signal, exitCode) {
  if (shuttingDown) return;
  shuttingDown = true;

  children.forEach((child) => {
    if (!child.killed) child.kill(signal);
  });

  setTimeout(() => process.exit(exitCode), 5000).unref();
}

children.forEach((child) => {
  child.on('exit', (code, signal) => {
    if (shuttingDown) return;

    const reason = signal ? `signal ${signal}` : `code ${code}`;
    console.error(`${child.processName} exited with ${reason}`);
    shutdown('SIGTERM', code || 1);
  });
});

process.on('SIGTERM', () => shutdown('SIGTERM', 0));
process.on('SIGINT', () => shutdown('SIGINT', 0));
