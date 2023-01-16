import { useState } from "react";
import { Link } from "react-router-dom";


const Headers= () =>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(

    <div className="navbar">
        <h1>Dev's Kitchen  </h1>
        <ul className="nav-list">
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>Order now</li>
            <li>
                <Link to = "/about">About us</Link>
            </li>
            <li>
                <Link to = "/contact">   Contact us </Link>
            </li>
        </ul>
        {
            isLoggedIn ? 
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                :         
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
        }
    </div>
)
}
export default Headers;