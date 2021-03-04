require('dotenv/config');

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    apiUser:
      process.env.ENV === 'dev'
        ? process.env.MAILTRAP_USER
        : process.env.MAIL_USER,
    apiKey:
      process.env.ENV === 'dev'
        ? process.env.MAILTRAP_PASSWORD
        : process.env.MAIL_PASSWORD,
  },
};
