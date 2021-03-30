module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn('users', 'role', {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'role');
  },
};
