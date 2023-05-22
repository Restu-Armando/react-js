import React from "react";
import { Link } from "react-router-dom";

// Import Logo
const logoUrl = process.env.PUBLIC_URL + "asset/image/name.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="col-sm-3">
          <img src={logoUrl} alt="Logo" />
        </div>

        <div className="col-sm-9">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/my-resume">Resume</Link>
              </li>
              <li>
                <Link to="/booking">Book Appointment</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
