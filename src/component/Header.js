import React from "react";

// Import Logo
const logoUrl = process.env.PUBLIC_URL + "asset/images/logo.png";

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
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
