const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  /* let isLoggedIn;
  req.get('Cookie').split(";").forEach(cookie => {
    if (cookie.split("=")[0] === "loggedIn") {
      isLoggedIn = cookie.split("=")[1] === "true";
    }
  });
  res.render('auth/login', {
      pageTitle: 'Login',
      path: '/login',
      isAuthenticated: isLoggedIn
    }); */
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  /* res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/'); */
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
