import path from 'path';
import edge from 'edge.js';
import Mail from '../lib/Mail';
import 'dotenv/config';

edge.registerViews(path.resolve(__dirname, '..', 'view'));

export default {
  key: 'NewEmailFromSiteJob',
  async handle({ data }) {
    await Mail.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: 'Você recebeu uma nova mensagem do site.',
      html: edge.render('newEmailFromSite', {
        data,
      }),
    });
  },
};
