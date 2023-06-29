var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET loginAdmin */
router.get('/admin', (req, res) => {
  res.render('pages/singin', { title: 'Administración'});
});
/* GET singUp */
router.get('/singup', (req, res) => {
  res.render('pages/singup', { title: 'Registrarse'});
});

module.exports = router;
