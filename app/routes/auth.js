var express = require('express');
const bcrypt = require('bcrypt');
const apiUsers = require('../api/users');
var router = express.Router();
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
  const { nombre, email } = req.body;
  //Encripto contraseña
  const password = req.body.password;
  const generateHash = (password) => {
    return bcrypt.hashSync(password, 10);
  }
  const userPass = generateHash(password);
  await apiUsers.singUpUser(nombre, email, userPass);
  res.redirect('/admin');
  //console.log('Pass encriptada',userPass);
  //res.send(`Vamos bien!!, ${nombre}, ${userPass}, ${email}`);
});
module.exports = router;