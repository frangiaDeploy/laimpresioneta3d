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
const getUsers = async () => {
    const users = await db.users.findAll();
    return users;
};
module.exports = {
    singUpUser,
    getUsers
}