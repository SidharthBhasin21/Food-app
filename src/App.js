import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import { createBrowserRouter ,RouterProvider ,Outlet, UNSAFE_useScrollRestoration } from "react-router-dom"; 



const App = () => {
    return (
        <React.Fragment>
            <Headers/>
            <Outlet/>
            {/*<Body/>*/}
            <Footer/>
        </React.Fragment>
    )
}


const appRouter  = createBrowserRouter([
    {
        path : "/",
        element : <App/> ,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path : "/about",
        element: <About/>   
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);