import { Model, DataTypes } from 'sequelize';

class Addresses extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        streetName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        streetNumber: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        streetAdd: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        neighborhood: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        zipcode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'addresses',
        defaultScope: {
          attributes: { exclude: ['updatedAt'] },
        },
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Clients, {
      foreignKey: 'clientId',
      as: 'client',
    });
  }
}
module.exports = Addresses;
