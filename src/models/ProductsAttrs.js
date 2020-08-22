import { Model, DataTypes } from 'sequelize';

class ProductAttrs extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        value: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Products',
            key: 'id',
          },
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products_attrs',
      },
    );
  }
}
module.exports = ProductAttrs;
