import path from 'path';
import edge from 'edge.js';
import Mail from '../lib/Mail';
import 'dotenv/config';

edge.registerViews(path.resolve(__dirname, '..', 'view'));

export default {
  key: 'NewOrderJob',
  async handle(order) {
    await Mail.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: 'Nova solicitação de pedido',
      html: edge.render('newOrder', {
        order,
        products: order.products,
      }),
    });
  },
};
