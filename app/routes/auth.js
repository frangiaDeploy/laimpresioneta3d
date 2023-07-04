var express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      //console.log("Username:", email);
      //console.log("Password:", password);
      try {
        const user = await db.users.findOne({ where: { email } });
        if (!user) {
          //console.log("Fallo");
          return done(null, false, { message: "Usuario incorrecto." });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          //console.log("Fallo");
          return done(null, false, { message: "Contraseña incorrecta" });
        }
        return done(null, user);
      } catch (error) {
        //console.log(error);
        return done(error);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.users.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
var router = express.Router();
/* GET loginAdmin */
router.get('/admin', async(req, res) => {
    const errorMessage = req.flash('error')[0];
  res.render('pages/singin', { title: 'Administración', errorMessage});
});
/* POST SingIn */
router.post('/singin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/admin',
    failureFlash: true,
}
))
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