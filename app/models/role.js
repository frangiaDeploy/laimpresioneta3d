'use strict';
module.exports = (sequelize, DataTypes) => {
const roles = sequelize.define('roles', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    timestamps: false
});
roles.associate = function(models) {
    roles.hasMany(models.users, {
      foreignKey: 'roleId',
      as: 'users'
    });
  };
return roles;
};