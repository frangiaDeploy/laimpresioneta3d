'use strict';
module.exports = (sequelize, DataTypes) => {
  const servicios = sequelize.define('servicios', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    iconService: DataTypes.STRING
  }, {});
  servicios.associate = function(models) {
    // associations can be defined here
  };
  return servicios;
};