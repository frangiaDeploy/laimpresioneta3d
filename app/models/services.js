'use strict';
module.exports = (sequelize, DataTypes) => {
const services = sequelize.define('services', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    iconService: {
        type: DataTypes.STRING(220),
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false
    } 
}, {
    timestamps: false
});
return services;
};