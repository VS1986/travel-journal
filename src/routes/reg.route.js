const regRoute = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const RegUser = require('../views/RegUser');
const { User } = require('../../db/models');

regRoute.get('/', (req, res) => {
  renderTemplate(RegUser, {}, res);
});

regRoute.post('/', async (req, res) => {
  const {
    fullName, email, login, password,
  } = req.body;
  console.log(`==========> `, req.body);
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json('User already exists');
    } else {
      const newUser = await User.create({
        fullName, email, login, password: hash,
      });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.redirect('/');
      });
    }
  } catch (error) {
    res.json(`Error =====> ${error}`);
  }
});

module.exports = regRoute;
