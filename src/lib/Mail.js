import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import mailConfigs from '../config/mail';

export default process.env.ENV === 'dev'
  ? nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: mailConfigs.auth.apiUser,
        pass: mailConfigs.auth.apiKey,
      },
    })
  : nodemailer.createTransport(
      sgTransport({
        auth: {
          api_key: mailConfigs.auth.apiKey,
        },
      }),
    );
