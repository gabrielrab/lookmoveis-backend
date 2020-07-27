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
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM([
            'superadmin',
            'admin',
            'vendor',
            'buyer',
          ]),
          allowNull: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          default: true,
        },
        comissionFee: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
        },
        companyId: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
