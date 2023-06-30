var express = require('express');
const bcrypt = require('bcrypt');
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
/* POST SingUp */
router.post('/singUpUsers', async(req, res) => {
  //Encripto contraseña
  const password = req.body.password;
  const generateHash = (password) => {
    return bcrypt.hashSync(password, 10);
  }
  const userPass = generateHash(password);
  //console.log('Pass encriptada',userPass);
  res.send(`Vamos bien!!, ${req.body.nombre}, ${userPass}, ${req.body.email}`);
});

module.exports = router;
