import { Model, DataTypes } from 'sequelize';

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'categories',
      },
    );
  }

  static associate() {}
}
module.exports = Categories;
