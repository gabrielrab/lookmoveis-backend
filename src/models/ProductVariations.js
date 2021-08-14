import { Model, DataTypes } from 'sequelize';

class ProductVariations extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'product_variations',
        underscored: true,
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
module.exports = ProductVariations;
