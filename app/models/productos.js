'use strict';
module.exports = (sequelize, DataTypes) => {
  const productos = sequelize.define('productos', {
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    imagen: DataTypes.STRING,
    detalles: DataTypes.STRING,
    linkDePago: DataTypes.STRING,
    otrosDetalles: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER
  }, {});
  productos.associate = function(models) {
    // associations can be defined here
  };
  return productos;
};