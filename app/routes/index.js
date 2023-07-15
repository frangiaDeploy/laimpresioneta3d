var express = require('express');
const bcrypt = require('bcrypt');
const apiUsers = require('../api/users');
const { isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
let user;

/* GET home page. */
router.get('/', function(req, res, next) {
  user = req.user;
  console.log(user);
  res.render('index', { title: 'Express', user});
});
router.get('/addProduct', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  res.render('pages/add', {title: 'Agregar producto', user});
});
/*
router.post('/addproduct', isAuthenticated, isAdmin, async(req, res) => {
  
});*/
router.get('/addService', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  res.render('pages/add', {title: 'Agregar servicio', user});
});


router.get('/products', isAuthenticated, isAdmin, (req, res) => {
  res.send('Esta es la pagina de productos');
});
module.exports = router;
