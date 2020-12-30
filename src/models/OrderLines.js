import { Model, DataTypes } from 'sequelize';

class OrderLines extends Model {
  static init(sequelize) {
    super.init(
      {
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        unitPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        qty: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        total: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM([
            'product',
            'shipping-fee',
            'geral-fee',
            'discount',
            'outher',
          ]),
          allowNull: false,
          defaultValue: 'outher',
        },
        objectId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        orderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'order_lines',
      },
    );
  }

  static associate() {}
}
module.exports = OrderLines;
