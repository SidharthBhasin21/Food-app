import { useState } from "react";

const Profile = (props) =>{
    const { name} = props;
    const [state,setState] = useState(0)


    const inc = () =>{  
        setState(item => item +1);
    }
    
    return(
        <div>
            <h2>This is the profile component {name}</h2>
            <p>{state}</p>
            <button onClick={() => inc()}>++</button>
        </div>
    )
}

export default Profile