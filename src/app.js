import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import routes from './router';
import { errorHandler, auth } from './middlewares';

require('dotenv').config();

const app = express();
const server = http.Server(app);

app.use(cors());

app.use(
  morgan(
    '[LOG] Data: [:date[clf]] Endereco: :remote-addr - Metodo::method :url - Status: :status',
  ),
);

require('./database');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(auth);
app.use('/', routes);
app.use(errorHandler);

module.exports = { app, server };
