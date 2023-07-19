var express = require('express');
const bcrypt = require('bcrypt');
const apiUsers = require('../api/users');
const apiProducts = require('../api/products');
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
  const categorys = await apiProducts.getCategory();
  res.render('pages/add', {title: 'Agregar producto', user, categorys});
});
router.post('/addproduct', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const { name, price, image, details, linkPago, otherDetails, categorias } = req.body;
  console.log(categorias);
  await apiProducts.addProduct(name, price, image, details, linkPago, otherDetails);
  const product = await apiProducts.getProductByName(name);
  await product.addCategorys(categorias);
  res.redirect('/');
});
router.get('/addService', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  res.render('pages/add', {title: 'Agregar servicio', user});
});
router.get('/addCategory', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  res.render('pages/add', {title: 'Agregar categoria', user});
});
router.post('/addcategory', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const { name } = req.body;
  console.log(name);
  await apiProducts.addCategory(name);
  res.redirect('/');
})

router.get('/products', isAuthenticated, isAdmin, (req, res) => {
  res.send('Esta es la pagina de productos');
});
module.exports = router;
