'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorias = sequelize.define('categorias', {
    nombre: DataTypes.STRING
  }, {});
  categorias.associate = function(models) {
    // associations can be defined here
  };
  return categorias;
};