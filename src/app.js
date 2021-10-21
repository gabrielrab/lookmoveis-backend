import express from 'express';
import compression from 'compression';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { router as UI, setQueues, BullAdapter } from 'bull-board';
import path from 'path';
import routes from './router';
import Queue from './lib/Queue';
import { errorHandler } from './middlewares';
import { adminBroAuth } from './lib/adminBro';
import adminBroConfig from './config/adminBro';
import 'dotenv/config';

const app = express();
app.use(compression());
const server = http.Server(app);

setQueues(Queue.queues.map((queue) => new BullAdapter(queue.bull)));

const corsConfig = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(cors(corsConfig));
app.options('*', cors());

app.use(
  morgan(
    '[LOG] Data: [:date[clf]] Endereco: :remote-addr - Metodo::method :url - Status: :status',
  ),
);

require('./database');

app.use(express.json({ limit: '100mb' }));
app.use(adminBroConfig.url, adminBroAuth);

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'uploads')),
);

app.use('/ui', UI);
app.use('/', routes);
app.use(errorHandler);

module.exports = { app, server };
