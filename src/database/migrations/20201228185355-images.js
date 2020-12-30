module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('images', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM([
          'product',
          'product-decorated',
          'wood-type',
          'category',
        ]),
        defaultValue: 'product',
        allowNull: false,
      },
      object_id: {
        type: DataTypes.INTEGER,
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
    return queryInterface.dropTable('images');
  },
};
