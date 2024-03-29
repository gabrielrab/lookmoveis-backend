module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM([
          'peding-approval',
          'confirmed',
          'production',
          'canceled',
          'delivery',
          'done',
        ]),
        allowNull: false,
        defaultValue: 'peding-approval',
      },
      nf_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      invoice_type: {
        type: DataTypes.ENUM(['card', 'bank-slip']),
        allowNull: false,
        defaultValue: 'card',
      },
      payment_terms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client_id: {
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
    return queryInterface.dropTable('orders');
  },
};
