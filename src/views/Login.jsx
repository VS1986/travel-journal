const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h2>Enter your account</h2>
      <hr />
      <script defer src="/js/login.fetch.js" />
      <div className="container">
        <form className="loginForm" name="loginForm">
          <div className="mb-3">
            <label htmlFor="exampleInputLogin" className="form-label">
              Login
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLogin"
              aria-describedby="emailHelp"
              name="login"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
        </form>
        <hr />
        <h3 className="logMsg">Здесь будет ваше сообщение</h3>
      </div>
    </Layout>
  );
};
