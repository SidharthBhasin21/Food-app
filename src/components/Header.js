import { useState } from "react";



const Headers= () =>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(

    <div className="navbar">
        <h1>Dev's Kitchen  </h1>
        <ul className="nav-list">
            <li>Home</li>
            <li>Order now</li>
            <li>About us</li>
            <li>Contact us</li>
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