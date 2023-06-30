const { sequelize, Op } = require('sequelize');
const db = require('../models');

const singUpUser = async (name, email, password) => {
    const user = await db.users.create({
        name,
        email,
        password
    });
    return user;
};

module.exports = {
    singUpUser
}