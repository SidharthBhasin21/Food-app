import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../components/styles/headerStyles.css";
import logo from "./assets/logo.png";

import UserContext from "./utils/UserContext";

const Headers = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="nav-link-container">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              {" "}
              Contact us{" "}
            </Link>
          </li>
          <li>
            <Link to="/groceries" className="nav-link">
              {" "}
              Groceries{" "}
            </Link>
          </li>
        </ul>
      </div>
      <span>Hi! {user.name}</span>
      <Link to="/cart">
        <span className="login-button">🛒 {cartItems.length}</span>
      </Link>
    </div>
  );
};
export default Headers;
