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
          allowNull: false,
        },
        clientId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'orders',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.OrderLines, {
      foreignKey: 'orderId',
      as: 'orderLines',
    });
  }
}
module.exports = Orders;
