var express = require('express');
const bcrypt = require('bcrypt');
const apiUsers = require('../api/users');
const apiProducts = require('../api/products');
const { isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
let user;

/* GET home page. */
router.get('/', async(req, res, next) => {
  user = req.user;
  const products = await apiProducts.getLastFourProduct()
  res.render('index', { title: 'Express', user, products});
});
router.get('/addProduct', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const categorys = await apiProducts.getCategory();
  res.render('pages/add', {title: 'Agregar producto', user, categorys});
});
router.post('/addproduct', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const { name, price, image, details, linkPago, otherDetails, idCategory } = req.body;
  await apiProducts.addProduct(name, price, image, details, linkPago, otherDetails, idCategory);  
  res.redirect('/');
});
router.get('/addService', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  res.render('pages/add', {title: 'Agregar servicio', user});
});
router.get('/categorys', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const categorys = await apiProducts.getCategory();
  res.render('pages/add', {title: 'Categorias', user, categorys});
});
router.post('/addcategory', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const { name } = req.body;
  console.log(name);
  await apiProducts.addCategory(name);
  const categorys = await apiProducts.getCategory();
  res.render('pages/add', {title: 'Categorias', user, categorys});
  //res.redirect('/');
})
router.get('/deletecategory/:id',isAuthenticated, isAdmin, async(req, res) =>{
  user = req.user;
  const categorys = await apiProducts.getCategory();
  const affectedRows = await apiProducts.deleteCategory(req.params.id);
  if (affectedRows > 0){
    res.redirect('/categorys')
  }else {
    res.send('Opps, lo siento algo fallo!!!');
  }
});
router.get('/products', async(req, res) => {
  user = req.user;
  const products = await apiProducts.getProducts();
  res.render('pages/products', { title: 'Productos', user, products});
});
module.exports = router;
