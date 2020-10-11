module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      street_add: {
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
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('addresses');
  },
};
