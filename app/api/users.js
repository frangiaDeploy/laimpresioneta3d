const { sequelize, Op } = require('sequelize');
const db = require('../models');

const singUpUser = async (nombre, email, password) => {
    const user = await db.users.create({
        nombre,
        email,
        password
    });
    return user;
};

module.exports = {
    singUpUser
}