import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import requireDir from 'require-dir';
import routes from './router';

require('dotenv').config();

const app = express();
const server = http.Server(app);

app.use(cors());

app.use(
  morgan(
    '[LOG] Data: [:date[clf]] Endereco: :remote-addr - Metodo::method :url - Status: :status',
  ),
);

require('./database/index');

requireDir('./models');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/', routes);

module.exports = { app, server };
