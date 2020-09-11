import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/Users';

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
