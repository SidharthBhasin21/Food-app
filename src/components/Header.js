import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/headerStyles.css";

const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <img src="https://rasoicalgary.com/wp-content/uploads/2021/11/rasoi-logo-1.png" />
      </Link>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Order now</li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact"> Contact us </Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Headers;
