function checkUser(req, res, next) {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/login');
    }
  }
  
  function secureRoute(req, res, next) {
    if (!req.session.login) {
      next();
    } else {
      res.redirect('/');
    }
  }
  
  function logSession(req, res, next) {
    console.log('Что в сессии==>', req.session);
    next();
  }
  
  module.exports = { checkUser, secureRoute, logSession };
  