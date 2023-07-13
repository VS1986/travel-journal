const React = require('react');

module.exports = function Navbar({ login }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="react-container">
          <div className="react">
            <div className="react__spoke react__spoke--0" />
            <div className="react__spoke react__spoke--1" />
            <div className="react__spoke react__spoke--2" />
            <div className="react__spoke--3" />
          </div>
        </div>
        <div className="logo-text-container">
          <p className="logo-text">Travel Journal</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!login && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/posts">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
            {login && (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    Welcome,
                    {login}
                    !
                  </span>
                </li>
                {/* добавить Profile в условие, для отображения после регистрации */}
                <li className="nav-item">
                  <a className="nav-link" href="/posts">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    Logout
                  </a>
                </li>
              </>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
