import { Model, DataTypes } from 'sequelize';

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isAvailable: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
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
          defaultValue: true,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products',
        order: [['id', 'DESC']],
      },
    );
  }

  static associate(models) {
    this.hasMany(models.ProductAttrs, {
      foreignKey: 'productId',
      as: 'attributes',
    });
    this.belongsTo(models.Categories, {
      foreignKey: 'id',
      as: 'category',
    });
    this.belongsToMany(models.WoodTypes, {
      as: 'woodTypes',
      through: { model: models.ProductWoodTypes, unique: false },
      foreignKey: 'productId',
      constraints: false,
    });
    this.hasMany(models.Images, {
      foreignKey: 'objectId',
      as: 'images',
    });
    this.hasMany(models.Images, {
      foreignKey: 'objectId',
      as: 'imagesDecorated',
    });
  }
}

module.exports = Products;
