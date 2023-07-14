const postRoute = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Posts = require('../views/Posts');
const ShowPost = require('../views/ShowPost');
const CreatePost = require('../views/CreatePost');

const { UsersPost, User, FavouritePost } = require('../../db/models');

// ! отображаем список всех постов и отфильтрованных постов
postRoute.get('/allposts', async (req, res) => {
  try {
    const { login } = req.session;

    const allPosts = await UsersPost.findAll({ order: [['createdAt', 'DESC']] });
    console.log('==================>', allPosts);
    if (!login) {
      renderTemplate(Posts, { allPosts }, res);
    } else {
      const { userId } = req.session;
      const allUsersPosts = await UsersPost.findAll({ where: { user_id: userId } });
      const favouritePosts = await FavouritePost.findAll({ where: { user_id: userId } });
      console.log('==================>', allUsersPosts);
      console.log('==================>', favouritePosts);
      renderTemplate(Posts, {
        login, allPosts, allUsersPosts, favouritePosts,
      }, res);
    }
  } catch (error) {
    res.json(`Error =====> ${error}`);
  }
});

// ! создаем новый пост
postRoute.get('/newpost', (req, res) => {
  const { login } = req.session;
  console.log('=================> Попали ');
  renderTemplate(CreatePost, { login }, res);
});

postRoute.post('/create', async (req, res) => {
  const { title, description, geo_tag } = req.body;
  try {
    const newPost = await UsersPost.create({
      user_id: Number(req.session.userId),
      title,
      description,
      geo_tag,
    }, {
      returning: true,
      plain: true,
    });
    if (newPost) {
      res.json({ msg: 'Post created successful', id: newPost.id });
    } else {
      res.json({ err: 'Post declined' });
    }
  } catch (error) {
    res.json(`Error =====> ${error}`);
  }
});

// ! отображаем искомый пост
postRoute.get('/:id', async (req, res) => {
  try {
    const post = await UsersPost.findOne({ where: { id: req.params.id } });
    const { login } = req.session;
    renderTemplate(ShowPost, { post, login }, res);
  } catch (error) {
    res.json(`Error =====> ${error}`);
  }
});

module.exports = postRoute;
