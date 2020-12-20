import 'dotenv/config';

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    api_user: process.env.MAIL_USER,
    api_key: process.env.MAIL_PASSWORD,
  },
};
