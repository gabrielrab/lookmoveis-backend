require('dotenv/config');

module.exports = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
  auth_pass: process.env.REDIS_PASS,
};
