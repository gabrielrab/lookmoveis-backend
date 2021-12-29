module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'active'),
      queryInterface.addColumn('users', 'active', {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }),
    ]);
  },

  down: (queryInterface, DataTypes) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'active'),
      queryInterface.addColumn('users', 'active', {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }),
    ]);
  },
};
