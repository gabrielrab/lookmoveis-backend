module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn('users', 'role', {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'role');
  },
};
