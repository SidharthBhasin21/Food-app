import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Headers from "./components/Header";




const App = () => {
    return (
        <React.Fragment>
            <Headers/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>);