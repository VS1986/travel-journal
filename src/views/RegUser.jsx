const React = require('react');
const Layout = require('./Layout');

function RegUser() {
  return (
    <Layout>
      <h2>Create your profile</h2>
      <hr />
      <div className="container">
        <form className="regForm" name="regForm" method="POST" action="/registration">
          <div className="userName">
            <label htmlFor="exampleInputUserName" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              aria-describedby="emailHelp"
              name="fullName"
            />
          </div>
          <div className="userEMail">
            <label htmlFor="exampleInputEMail" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEMail"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
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
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign up
          </button>
        </form>
        <hr />
        <h3 className="logMsg">Здесь будет ваше сообщение</h3>
      </div>
    </Layout>
  );
}

module.exports = RegUser;
