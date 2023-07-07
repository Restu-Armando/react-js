import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Import Logo
  const logoUrl = process.env.PUBLIC_URL + "asset/image/name.png";

  return (
    <header className="header">
      <div className="container">
        <div className="col-sm-2">
          <div className="header__logo">
            <img src={logoUrl} alt="Logo" />
          </div>
        </div>

        <div className="col-sm-10">
          <nav className="header__nav">
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
