import Sequelize from 'sequelize';
import dbConfig from '../config/database';

// import { Products, ProductsAttrs } from '../models';
import Models from '../models';

const connection = new Sequelize(dbConfig);

// Products.init(connection);
// ProductsAttrs.init(connection);

// Products.associate(connection.models);
// ProductsAttrs.associate(connection.models);

Object.keys(Models).map((model) => Models[model].init(connection));
Object.keys(Models).map((model) =>
  Models[model].associate(connection.models),
);

module.exports = connection;
