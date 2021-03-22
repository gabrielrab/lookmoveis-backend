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
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        percentage: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'roles',
        underscored: true,
      },
    );
  }

  static associate(models) {
    // this.belongsTo(models.Products, {
    //   foreignKey: 'objectId',
    //   as: 'products',
    // });
    // this.belongsTo(models.WoodTypes, {
    //   foreignKey: 'objectId',
    //   as: 'woodTypes',
    // });
    // this.belongsTo(models.Categories, {
    //   foreignKey: 'objectId',
    //   as: 'categories',
    // });
  }
}
module.exports = Images;
