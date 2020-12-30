/* eslint-disable no-return-await */
import repository from '../factories/Repository';
import {
  Orders as Order,
  OrderLines as OrderLine,
  Products as Product,
  Clients as Client,
  Addresses as Address,
} from '../models';
import Queue from '../lib/Queue';

module.exports = {
  async list(req, res) {
    const data = await repository(Order).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Order).getById(req.params.id);
    return res.send(data);
  },

  async store(req, res) {
    const transaction = await Order.sequelize.transaction();
    try {
      const { products, ...restOrderData } = req.body;

      const [client, address] = await Promise.all([
        repository(Client).getById(req.body.clientId),
        repository(Address).getById(req.body.clientId),
      ]);

      const basketProducts = await Promise.all(
        products.map(async (product) => {
          const current = await repository(Product).getById(
            product.id,
          );
          return {
            name: current.name,
            description: `Produto: #${current.id}-${current.name}`,
            unitPrice: current.price,
            qty: product.qty,
            type: 'product',
            total: current.price * product.qty,
          };
        }),
      );

      const order = await Order.create(
        {
          ...restOrderData,
          total: basketProducts.reduce(
            (acc, i) => acc + parseFloat(i.total),
            0,
          ),
        },
        { transaction },
      );

      const orderLines = await Promise.all(
        basketProducts.map(
          async (product) =>
            await OrderLine.create(
              {
                ...product,
                orderId: order.id,
              },
              { transaction },
            ),
        ),
      );
      await Queue.add('NewOrderJob', {
        ...order.toJSON(),
        products: orderLines,
        client: client.toJSON(),
        address: address.toJSON(),
      });
      await transaction.commit();
      return res.send({
        ...order.toJSON(),
        orderLines,
      });
    } catch (error) {
      await transaction.rollback();
      throw new Error(error);
    }
  },

  async destroy(req, res) {
    await repository(Order).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
