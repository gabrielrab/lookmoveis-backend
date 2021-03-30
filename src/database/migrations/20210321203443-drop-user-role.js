module.exports = {
  up: (queryInterface) => {
    return queryInterface.removeColumn('users', 'role');
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.addColumn('users', 'role', {
      type: DataTypes.ENUM(['superadmin', 'admin', 'buyer']),
      allowNull: false,
      defaultValue: 'buyer',
    });
  },
};
