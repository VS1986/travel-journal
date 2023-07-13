const logoutRouter = require('express').Router();

logoutRouter.get('/', (req, res) => {
  // ! посмотреть про callback
  req.session.destroy();
  res.clearCookie('Traveler');
  res.redirect('/');
});

module.exports = logoutRouter;
