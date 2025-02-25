import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [btnLogged, setBtnLogged] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-status"
            onClick={() =>
              btnLogged === "Login"
                ? setBtnLogged("Logout")
                : setBtnLogged("Login")
            }
          >
            {btnLogged}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
