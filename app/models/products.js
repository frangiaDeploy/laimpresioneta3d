'use strict';
module.exports = (sequelize, DataTypes) => {
const products = sequelize.define('products', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(220),
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    linkPago: {
        type: DataTypes.STRING(220),
        allowNull: true
    },
    otherDetails: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    /*Este debo quitarlo si quiero implementar varias categorias para los productos */
    idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
products.associate = function(models) {
    products.belongsTo(models.categorys, {
      foreignKey: 'idCategory',
      onDelete: 'CASCADE'
    });
};
/* Esto va si quiero que un producto tenga más de una categoria
products.associate = function(models) {
    products.belongsToMany(models.categorys, {
      through: 'product_category', // Nombre de la tabla intermedia
      foreignKey: 'productId',
      otherKey: 'categoryId',
      timestamps: false
    })
  };*/
return products;
};