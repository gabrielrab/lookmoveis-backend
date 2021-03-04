require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRESQL_HOST,
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASS,
  database: process.env.POSTGRESQL_DB,
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
};
