import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
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

    super.beforeSave(async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    });

    super.authenticate = async (email, password) => {
      const user = await super.findOne({
        where: { email },
        // adicionar aqui o relacionamento necessário
        rejectOnEmpty: false,
      });
      const checkPassword =
        user !== null
          ? await bcrypt.compare(password, user.password)
          : false;

      if (!checkPassword) {
        throw new ForbiddenError('Usuário ou senha inválido !');
      }
      return user;
    };
  }

  static associate() {}
}
module.exports = User;
