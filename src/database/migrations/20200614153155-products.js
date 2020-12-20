module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('products', {
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
      is_available: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weight: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      width: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      heigth: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      length: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      category_id: {
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
    return queryInterface.dropTable('products');
  },
};
