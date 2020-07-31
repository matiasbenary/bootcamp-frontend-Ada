import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink
              to="/home"
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
