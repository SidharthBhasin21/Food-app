import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () =>{
    return (
        <div>
            <h1>This is the about us page</h1>
            <p> Order some food🍝</p>
            {/*<Profile name = "Sidharth"/>
    // <ProfileClass/>*/
            <Outlet/>}
        </div>
    )   
}

export default About;