const { sequelize, Op } = require('sequelize');
const db = require('../models');

const addCategory = async(name) => {
    const category = await db.categorys.create({
        name
    });
    return category;
}
const getCategory = async() => {
    const categorys = await db.categorys.findAll();
    return categorys;
}
const getCategoryById = async(id) => {
    const category = db.categorys.findByPk(id)
    .then(result => {
        return result;
    })
    return category;
}
const deleteCategory = async(idCategory) => {
    const category = await db.categorys.destroy({
        where: {
            id: idCategory
        }
    });
    return category;
}
const addProduct = async(name, price, image, details, linkPago, otherDetails, idCategory) => {
    const product = db.products.create({
        name, 
        price, 
        image, 
        details, 
        linkPago, 
        otherDetails,
        idCategory
    });
    return product;
}
const getProducts = async() => {
    const products = await db.products.findAll();
    return products;
}
/* Filtro producto para poder agregarle más de una categoria
const getProductByName = async(name) => {
    const product = db.products.findOne({
        where: {
            name: name
        }
    });
    return product;
}*/
module.exports = {
    addCategory,
    getCategory,
    getCategoryById,
    deleteCategory,
    addProduct,
    getProducts
}