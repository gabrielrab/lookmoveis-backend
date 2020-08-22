import { Model, DataTypes } from 'sequelize';

class User extends Model {
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
          allowNull: false,
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
        tableName: 'clients',
      },
    );
  }
}
module.exports = User;
