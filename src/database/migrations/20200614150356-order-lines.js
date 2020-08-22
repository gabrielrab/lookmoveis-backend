module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('order_lines', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      invoice_type: {
        type: DataTypes.ENUM([
          'product',
          'shipping-fee',
          'geral-fee',
          'discount',
          'outher',
        ]),
        allowNull: false,
        defaultValue: 'outher',
      },
      object_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'orders',
          },
          key: 'id',
        },
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
    return queryInterface.dropTable('order_lines');
  },
};
