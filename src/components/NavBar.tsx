import { NavLink } from "react-router-dom";
import TescLogoWhite from "/AllPages/TESC-logo-white.png";
import "./navbar.css";
const NavBar = () => {
  const pages = (
    <ul className="navbar-nav ms-auto mb-0">
      <li className="nav__items nav-item text-center px-4">
        <NavLink className="nav-link" to="https://tesc.typeform.com/to/hlC07HII">
          <span className="nav-text">Join Us</span>
        </NavLink>
      </li>
      <li className="nav__items nav-item text-center px-4">
        <NavLink className="nav-link" to="/about-us">
          <span className="nav-text">About Us </span>
        </NavLink>
      </li>
      <li className="nav__items nav-item text-center px-4">
        <NavLink className="nav-link" to="/events">
          <span className="nav-text">Events</span>
        </NavLink>
      </li>
      <li className="nav__items nav-item text-center px-4">
        <NavLink className="nav-link" to="/council-members">
          <span className="nav-text">Council Members</span>
        </NavLink>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid d-flex align-items-center">
          <NavLink to="/">
            <img className="nav__logo" src={TescLogoWhite} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            {pages}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
