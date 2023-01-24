import { useEffect, useState } from "react";
import { FETCH_RESTAURANT } from "../../Constants";

const useRestaurants = (resId) =>{

    const [restaurant,setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_RESTAURANT + resId);
        const json  = await data.json();
        setRestaurant(json.data)
    }
    return restaurant;
}
export default useRestaurants;