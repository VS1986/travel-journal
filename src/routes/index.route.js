const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

router.get('/', (req, res) => {
  const { login } = req.session;
  console.log('======================>', login);
  renderTemplate(Home, { login }, res);
});

module.exports = router;
