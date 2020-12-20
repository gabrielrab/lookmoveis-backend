import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import mailConfigs from '../config/mail';

export default nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: mailConfigs.auth.api_key,
    },
  }),
);
