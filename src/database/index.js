import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Models from '../models';

const connection = new Sequelize(dbConfig);

Object.keys(Models).map((model) => Models[model].init(connection));

module.exports = connection;
