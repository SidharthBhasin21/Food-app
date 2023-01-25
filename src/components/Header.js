import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/headerStyles.css";
import logo from "./assets/logo.png" 
const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <img src = {logo} className="logo"/>
      </Link>
      <div className="nav-link-container">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About us</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link"> Contact us </Link>
          </li>
          <li>
            <Link to="/groceries" className="nav-link"> Groceries </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-button" onClick={() => setIsLoggedIn(false)}>Cart</button>
      ) : (
        <button className="login-button" onClick={() => setIsLoggedIn(true)}>Empty</button>
      )}
    </div>
  );
};
export default Headers;
