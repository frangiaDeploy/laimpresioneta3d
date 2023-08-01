const { validationResult, body } = require('express-validator');

const validateCreateCategory = [
    body('name').notEmpty()
    .withMessage('Complete el campo nombre')
    .isAlpha()
    .withMessage('Solo puede contener letras el campo nombre')
    .isLength({ min: 3, max: 25})
    .withMessage('El nombre debe tener minimo 3 caracteres y maximo 25')
]
const validateCreateProdcut = [
    body('name').notEmpty()
    .withMessage('Complete el campo nombre')
    .isLength({ min: 3, max: 25})
    .withMessage('El nombre debe tener minimo 3 caracteres y maximo 25')
    .isAlpha()
    .withMessage('Solo puede contener letras el campo nombre'),
    body('price').notEmpty()
    .withMessage('Complete el campo Precio')
    .isAlphanumeric()
    .withMessage('Debe ingresar un precio de tipo numerico'),
    body('image').notEmpty()
    .withMessage('Complete el campo imagen'),
    body('details').notEmpty()
    .withMessage('Complete el campo detalles, separe los mismos con ;')    
]
const validateInputs = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista con los mensajes de error
      //const errorMessages = errors.array().map(error => error.msg);
      req.session.errorMessages = errors.array().map(error => error.msg);  
      req.session.data = req.body;      
      return false;
    }
    return true;
}
module.exports = {
    validateCreateCategory,
    validateCreateProdcut,
    validateInputs
}