import path from 'path';
import edge from 'edge.js';
import Mail from '../lib/Mail';
import 'dotenv/config';

edge.registerViews(path.resolve(__dirname, '..', 'view'));

export default {
  key: 'NewOrderJob',
  async handle({ data }) {
    // company email
    await Mail.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: 'Nova solicitação de pedido',
      html: edge.render('newOrder', {
        order: data,
        products: data.products,
        client: data.client,
        address: data.address,
      }),
    });
    // client email
    await Mail.sendMail({
      from: process.env.MAIL_SENDER,
      to: data.client.email,
      subject: 'Seu pedido foi adicionado com sucesso!',
      html: edge.render('newOrderClient', {
        order: data,
        products: data.products,
        client: data.client,
        address: data.address,
      }),
    });
  },
};
