import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movies</Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Watch List</NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn btn-bark">
                Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
