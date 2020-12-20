import { Model, DataTypes } from 'sequelize';

class WoodTypes extends Model {
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
        tableName: 'wood_types',
      },
    );
  }

  static associate() {}
}
module.exports = WoodTypes;
