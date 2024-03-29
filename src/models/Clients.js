import { Model, DataTypes } from 'sequelize';

class Clients extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        doc: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'clients',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Addresses, {
      foreignKey: 'clientId',
      as: 'addresses',
    });
  }
}
module.exports = Clients;
