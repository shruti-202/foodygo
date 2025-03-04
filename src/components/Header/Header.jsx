import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogged, setBtnLogged] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
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
