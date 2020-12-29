import { Model, DataTypes } from 'sequelize';

class Images extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM([
            'product',
            'product-decorated',
            'wood-type',
            'category',
          ]),
          defaultValue: 'product',
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'images',
        underscored: true,
      },
    );
  }

  static associate() {}
}
module.exports = Images;
