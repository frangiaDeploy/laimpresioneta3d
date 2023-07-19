'use strict';
module.exports = (sequelize, DataTypes) => {
const categorys = sequelize.define('categorys', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    } 
}, {
    timestamps: false
});
categorys.associate = function(models) {
    categorys.belongsToMany(models.products, {
      through: 'product_category', // Nombre de la tabla intermedia
      foreignKey: 'categoryId',
      otherKey: 'productId',
      timestamps: false
    });
  };

return categorys;
};