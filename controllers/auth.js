exports.getLogin = (req, res, next) => {
    let isLoggedIn;
    req.get('Cookie').split(";").forEach(cookie => {
      if (cookie.split("=")[0] === "loggedIn") {
        isLoggedIn = cookie.split("=")[1] === "true";
      }
    });
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: isLoggedIn
      });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
};