const { sequelize, Op } = require('sequelize');
const db = require('../models');
const services = require('../models/services');
const getServices = async() => {
    const service = await db.services.findAll();
    return service;
}
const getLastThreeServices = async() => {
    const service = await db.services.findAll({
        limit: 3,
        order: [['id', 'DESC']]
    });
    return service
}
const addService = async(name, iconService, details) => {
    const service = await db.services.create({
        name,
        iconService,
        details
    });
    return service;
}
const deleteService = async(idService) => {
    const service = await db.services.destroy({
        where: {
            id: idService
        }
    });
    return service;
}
const getServiceById = async(id) => {
    const service = await db.services.findByPk(id)
    .then(result => {
        return result;
    });
    return service;
}
const updateService = async(id, name, iconService, details) => {
    const service = await db.services.update({
        name,
        iconService,
        details
    }, {
        where: {
            id
        }
    });
    return service;
}
module.exports = {
    getLastThreeServices,
    addService,
    deleteService,
    getServiceById,
    updateService,
    getServices
}