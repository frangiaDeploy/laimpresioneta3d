const { sequelize, Op } = require('sequelize');
const db = require('../models');

const addCategory = async(name) => {
    const category = await db.categorys.create({
        name
    });
    return category;
}
const getCategory = async() => {
    const categorys = db.categorys.findAll();
    return categorys;
}
const addProduct = async(name, price, image, details, linkPago, otherDetails) => {
    const product = db.products.create({
        name, 
        price, 
        image, 
        details, 
        linkPago, 
        otherDetails
    });
    return product;
}
const getProductByName = async(name) => {
    const product = db.products.findOne({
        where: {
            name: name
        }
    });
    return product;
}
module.exports = {
    addCategory,
    getCategory,
    addProduct,
    getProductByName
}