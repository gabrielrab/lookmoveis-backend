/* eslint-disable no-return-await */
import repository from '../factories/Repository';
import {
  Orders as Order,
  OrderLines as OrderLine,
  Products as Product,
  Clients as Client,
  Addresses as Address,
  Roles as Role,
} from '../models';
import Queue from '../lib/Queue';

const ListingQuery = {
  associations: [{ association: 'orderLines' }],
};

module.exports = {
  async list(req, res) {
    const data = await repository(Order, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Order, ListingQuery).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const transaction = await Order.sequelize.transaction();
    try {
      const { role, products, ...restOrderData } = req.body;

      const [client, address] = await Promise.all([
        repository(Client).getById(req.body.clientId),
        repository(Address).getById(req.body.clientId),
      ]);

      const userRole = !role
        ? false
        : await repository(Role).getById(role);

      const basketProducts = await Promise.all(
        products.map(async (product) => {
          const current = await repository(Product).getById(
            product.id,
          );
          return {
            name: current.name,
            description: `${current.name}`,
            unitPrice: current.price,
            qty: product.qty,
            type: 'product',
            total: !userRole
              ? current.price * product.qty
              : (userRole.percentage / 100) *
                  (current.price * product.qty) +
                current.price * product.qty,
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
