import { Model, DataTypes } from 'sequelize';

class ProductWoodTypes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        woodTypeId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'product_wood_types',
        underscored: true,
      },
    );
  }

  static associate() {}
}
module.exports = ProductWoodTypes;
