import { Model, DataTypes } from 'sequelize';

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: DataTypes.ENUM([
            'peding-approval',
            'confirmed',
            'production',
            'canceled',
            'delivery',
            'done',
          ]),
          allowNull: false,
          defaultValue: 'peding-approval',
        },
        nfNumber: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        total: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        invoiceType: {
          type: DataTypes.ENUM(['card', 'bank-slip']),
          allowNull: false,
          defaultValue: 'card',
        },
        paymentTerms: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        addressId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Addresses',
            key: 'id',
          },
          allowNull: false,
        },
        clientId: {
          type: DataTypes.STRING,
          references: {
            model: 'Clients',
            key: 'id',
          },
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'orders',
      },
    );
  }
}
module.exports = Orders;
