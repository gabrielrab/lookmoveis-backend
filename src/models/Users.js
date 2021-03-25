import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ForbiddenError } from '../utils/errors';

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
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'users',
      },
    );

    super.beforeSave(async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    });

    super.authenticate = async (email, password) => {
      const user = await super.findOne({
        where: { email },
        rejectOnEmpty: false,
        include: [
          {
            association: 'userRole',
          },
        ],
      });
      const checkPassword =
        user !== null
          ? await bcrypt.compare(password, user.password)
          : false;

      if (!checkPassword) {
        throw new ForbiddenError('Usuário ou senha inválido !');
      }
      const token = jwt.sign(
        user.toJSON(),
        process.env.JWT_PRIVATE_KEY,
        {
          expiresIn: '24h',
        },
      );
      return { token };
    };
  }

  static associate(models) {
    this.belongsTo(models.Roles, {
      foreignKey: 'role',
      as: 'userRole',
    });
  }
}
module.exports = User;
