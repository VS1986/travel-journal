const React = require('react');
const Layout = require('./Layout');

module.exports = function Posts({
  login, allPosts, allUsersPosts, favouritePosts,
}) {
  const [filteredPosts, setFilteredPosts] = React.useState(allPosts);

  const handleYourPostsClick = () => {
    console.log('==================>', allUsersPosts);
    setFilteredPosts(allUsersPosts);
  };

  const handleYourFavouritesClick = () => {
    setFilteredPosts(favouritePosts);
  };
  return (
    <Layout login={login}>
      <main role="main">
        <div className="posts-container">
          <h1>Posts</h1>
          {!login && (
            <ul className="posts-list no-bullets no-padding">
              {allPosts.map((post) => (
                <li className="post-item pad-b-4" key={post.id}>
                  <a href={`/posts/${post.id}`} className="post-title font-2 pad-b-1-4 c-white">{post.title}</a>
                  <span className="post-date block font-3-4 c-lt-gray">
                    Written on
                    {post.createdAt.toLocaleDateString()}
                  </span>
                  <p className="post-stub">{post.description}</p>
                </li>
              ))}
            </ul>
          )}
          {login && (
            <div className="post-list-autorized-user">
              <div>
                <a href="#" onClick={handleYourPostsClick}>Your posts</a>
                <a href="#" onClick={handleYourFavouritesClick}>Your favourites</a>
              </div>
              <ul className="posts-list no-bullets no-padding">
                {filteredPosts.map((post) => (
                  <li className="post-item pad-b-4" key={post.id}>
                    <a href={`/posts/${post.id}`} className="post-title font-2 pad-b-1-4 c-white">{post.title}</a>
                    <span className="post-date block font-3-4 c-lt-gray">
                      Written on
                      {post.createdAt.toLocaleDateString()}
                    </span>
                    {/* <p className="post-stub">{post.description}</p> */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};
