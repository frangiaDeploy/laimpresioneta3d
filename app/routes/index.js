var express = require('express');
const bcrypt = require('bcrypt');
const apiUsers = require('../api/users');
const apiProducts = require('../api/products');
const apiServices = require('../api/services');
const { isAuthenticated, isAdmin } = require('../controllers/auth');
const { addService } = require('../api/services');
var router = express.Router();
let user;

/* GET home page. */
router.get('/', async(req, res, next) => {
  user = req.user;
  const services = await apiServices.getLastThreeServices()
  const products = await apiProducts.getLastFourProduct()
  res.render('index', { title: 'Laimpresioneta3d', user, products, services});
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
router.post('/addservice', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const { name, iconService, details } = req.body;
  await apiServices.addService(name, iconService, details);
  res.redirect('/')
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
router.get('/deleteproduct/:id',isAuthenticated, isAdmin, async(req, res) =>{
  user = req.user;
  const products = await apiProducts.getProducts();
  const affectedRows = await apiProducts.deleteProduct(req.params.id);
  if (affectedRows > 0){
    res.redirect('/products')
  }else {
    res.send('Opps, lo siento algo fallo!!!');
  }
});
router.get('/deleteservice/:id',isAuthenticated, isAdmin, async(req, res) =>{
  user = req.user;
  const services = await apiServices.getServices;
  const affectedRows = await apiServices.deleteService(req.params.id);
  if (affectedRows > 0){
    res.redirect('/')
  }else {
    res.send('Opps, lo siento algo fallo!!!');
  }
});
router.get('/editproduct/:id',isAuthenticated, isAdmin, async(req, res) =>{
  user = req.user;
  const product = await apiProducts.getProductById(req.params.id);
  const categorys = await apiProducts.getCategory();
  res.render('forms/editProduct', { title: 'Editar producto' ,product, user, categorys})
});
router.post('/editproduct/:id', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const id = req.params.id;
  const { name, price, image, details, linkPago, otherDetails, idCategory } = req.body;
  await apiProducts.updateProduct(id, name, price, image, details, linkPago, otherDetails, idCategory);
  const products = await apiProducts.getProducts()
  res.render('pages/products', { title: 'Productos', user, products })
});
router.get('/editservice/:id', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const service = await apiServices.getServiceById(req.params.id);
  res.render('forms/editService', { title: 'Editar Servicio', service, user })
});
router.post('/editservice/:id', isAuthenticated, isAdmin, async(req, res) => {
  user = req.user;
  const id = req.params.id;
  const { name, iconService, details } = req.body;
  await apiServices.updateService(id, name, iconService, details);
  const products = await apiProducts.getLastFourProduct();
  const services = await apiServices.getLastThreeServices();
  res.redirect('/')
});
module.exports = router;
