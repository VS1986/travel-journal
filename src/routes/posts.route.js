// const postRoute = require('express').Router();
// const renderTemplate = require('../lib/renderTemplate');

// const Posts = require('../views/Posts');
// const { UsersPost, User, FavouritePost } = require('../../db/models');

// postRoute.get('/', async (req, res) => {
//   try {
//     const { login } = req.session.login;
//     const allUsersPosts = await UsersPost.findAll({ order: [['createdAt', 'DESC']] });
//     renderTemplate(Posts, { allUsersPosts, login }, res);

//     // const allUsersPosts = await UsersPost.findAll({ where: { login } });
//   } catch (error) {

//   }
// });

// module.exports = postRoute;