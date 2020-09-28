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
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products_attrs',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Products, {
      foreignKey: 'productId',
      as: 'product',
    });
  }
}
module.exports = ProductAttrs;
