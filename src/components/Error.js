import { useRouteError } from "react-router-dom"; 


const Error = () =>{
    console.log(useRouteError())
    return(
        <div>
            <h1> Oops... You have run into an Error</h1>
            <p>{`here the error no is ${useRouteError().status} ---->  ${useRouteError().error}`}</p>
        </div>
    )
}

export default Error;