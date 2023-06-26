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
return roles;
};