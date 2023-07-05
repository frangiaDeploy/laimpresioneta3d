const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/admin');
  }
};

const isAdmin = (req, res, next) => {
    console.log(req.user.admin);
  if (req.user && req.user.admin == true) {
    return next();
  } else {
    res.send('Access-denied');
  }
};

module.exports = { isAuthenticated, isAdmin };