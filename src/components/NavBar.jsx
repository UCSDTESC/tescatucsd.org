import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const pages = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-center">
        <NavLink className="nav-link" to="/">
          ABOUT
        </NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink className="nav-link" to="/">
          MEMBERS
        </NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink className="nav-link" to="/">
          EVENTS
        </NavLink>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <NavLink to="/">
          <img className="nav__logo" src="/tesc-logo.png" alt="" />
        </NavLink>
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {pages}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
