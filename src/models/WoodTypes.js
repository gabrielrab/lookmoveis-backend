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

  static associate(models) {
    this.belongsToMany(models.WoodTypes, {
      as: 'products',
      through: { model: models.ProductWoodTypes, unique: false },
      foreignKey: 'woodTypeId',
      constraints: false,
    });
    this.hasOne(models.Images, {
      foreignKey: 'objectId',
      as: 'thumb',
    });
  }
}
module.exports = WoodTypes;
