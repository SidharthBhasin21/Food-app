import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider  } from "react-router-dom"; 



const App = () => {
    return (
        <React.Fragment>
            <Headers/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}


const appRouter  = createBrowserRouter([
    {
        path : "/",
        element : <App/> ,
        errorElement: <Error/>
    },
    {
        path : "/about",
        element: <About/>   
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);