import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite</NavLink>
            </li>
            <li>
              <NavLink to="signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="login">Log In</NavLink>
            </li>
          </ul>
          <h1 className="logo">Halal</h1>
        </div>
      </nav>
    </div>
  );
}
