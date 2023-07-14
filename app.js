require('@babel/register');
require('dotenv').config();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { secureRoute, logSession } = require('./src/middlewares/common');

const dbConnectionCheck = require('./db/dbConnectCheck');

const router = require('./src/routes/index.route');
const regRoute = require('./src/routes/reg.route');
const loginRoute = require('./src/routes/login.route');
const logoutRoute = require('./src/routes/logout.route');
const postRoute = require('./src/routes/posts.route');

const app = express();
const { PORT } = process.env;
dbConnectionCheck();

const sessionConfig = {
  name: 'Traveler',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));
app.use(logSession);

app.use('/', router);
app.use('/registration', secureRoute, regRoute);
app.use('/login', secureRoute, loginRoute);
app.use('/logout', logoutRoute);
app.use('/posts', postRoute);
// app.use('/new', postRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
