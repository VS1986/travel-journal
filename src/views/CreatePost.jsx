const React = require('react');
const Layout = require('./Layout');

module.exports = function CreatePost({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/posts.fetch.js" />
      <h1>Create new Post</h1>
      <form name="newPost" id="newPost">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
        <label htmlFor="geo_tag">Location</label>
        <textarea name="geo_tag" id="geo_tag" />
        <input type="submit" value="Save" />
      </form>
    </Layout>
  );
};
