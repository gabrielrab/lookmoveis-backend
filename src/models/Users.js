import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
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
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM(['superadmin', 'admin', 'buyer']),
          defaultValue: 'buyer',
          allowNull: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        clientId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Clients',
            key: 'id',
          },
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }
}
module.exports = User;
