import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { router as UI, setQueues, BullAdapter } from 'bull-board';
import path from 'path';
import routes from './router';
import Queue from './lib/Queue';
import { errorHandler } from './middlewares';
import adminBroRouter from './lib/adminBro';
import adminBroConfig from './config/adminBro';
import 'dotenv/config';

const app = express();
const server = http.Server(app);

setQueues(Queue.queues.map((queue) => new BullAdapter(queue.bull)));

app.use(cors());
app.use((req, res, next) => {
  let oneof = false;
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    oneof = true;
  }
  if (req.headers['access-control-request-method']) {
    res.header(
      'Access-Control-Allow-Methods',
      req.headers['access-control-request-method'],
    );
    oneof = true;
  }
  if (req.headers['access-control-request-headers']) {
    res.header(
      'Access-Control-Allow-Headers',
      req.headers['access-control-request-headers'],
    );
    oneof = true;
  }
  if (oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }
  if (oneof && req.method === 'OPTIONS') {
    res.send(204);
  } else {
    next();
  }
});

app.use(
  morgan(
    '[LOG] Data: [:date[clf]] Endereco: :remote-addr - Metodo::method :url - Status: :status',
  ),
);

require('./database');

app.use(express.json({ limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(adminBroConfig.url, adminBroRouter);

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'uploads')),
);

app.use('/ui', UI);
app.use('/', routes);
app.use(errorHandler);

module.exports = { app, server };
