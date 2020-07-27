module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        unique: true,
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
      comission_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: true,
    },
  );

  return User;
};
