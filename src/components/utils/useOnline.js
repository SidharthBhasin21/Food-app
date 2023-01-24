import { useEffect, useState } from "react";

export const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);
    const handleOnline= ()=>{
        setIsOnline(true)
    }
    const handleOffline= ()=>{
        setIsOnline(false)
    }
    useEffect( () =>{
        window.addEventListener("online", ()=>{handleOnline})
        window.addEventListener("offline", ()=>{handleOffline})


        return () =>{
            removeEventListener("online",handleOffline)
            removeEventListener("offline",handleOnline)
        }
    },[])

    return isOnline;
}
