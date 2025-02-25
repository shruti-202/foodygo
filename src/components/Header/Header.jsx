import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
