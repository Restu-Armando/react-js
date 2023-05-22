import React from "react";

const Footer = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright {getYear} - </p>
      </div>
    </footer>
  );
};

export default Footer;
