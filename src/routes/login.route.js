const loginRoute = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const renderTemplate = require('../lib/renderTemplate');

const { User } = require('../../db/models');

loginRoute.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRoute.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.save(() => {
          // res.redirect('/');
          res.json({ msg: 'Login successful' });
        });
      } else {
        res.status(401).json({ error: 'Wrong password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.json(`Error ======> ${error}`);
  }
});

module.exports = loginRoute;
