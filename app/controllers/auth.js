const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/admin');
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === '1') {
    return next();
  } else {
    res.send('Access-denied');
  }
};

module.exports = { isAuthenticated, isAdmin };