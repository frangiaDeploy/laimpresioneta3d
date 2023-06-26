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
return categorys;
};