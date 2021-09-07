import React from "react";
import '../css/Main.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand mx-2" href="/">
          Shoukrey Tom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/skills">
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/work">
                Work
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
