const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowPost({ post, login }) {
  return (
    <Layout login={login}>
      <a href="/posts">Back to all posts</a>
      <h1>{post.title}</h1>
      <p>{post.description}</p>

      <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
        <li className="pipe-separate left">
          <a href={`/entries/${post.id}/edit`} className="c-white">Edit post</a>
        </li>

        <li className="pipe-separate left">
          <button
            id="deleteEntryButton"
            data-entryid={post.id}
            value="delete"
            type="button"
            className="no-border no-outline no-bg c-white hover-underline"
          >
            Delete
          </button>
        </li>
      </ul>
    </Layout>
  );
};
