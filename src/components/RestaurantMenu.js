import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" 
import { IMG_CDN_URL } from "../Constants"
import Shimmer from "./Shimmer"
import useRestaurants from "./utils/useRestaurant"

const RestaurantMenu = () =>{
    const { resId } = useParams()
    // const [restaurant,setRestaurant] = useState(null); 

   const restaurant = useRestaurants(resId)
    
    return restaurant == null? <Shimmer/>:(
        <div className="menu-page">
            <div>
                <h3>Restaurant name: {restaurant?.name} </h3>
                <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
                <h2>{restaurant.area}</h2>
                <h2>{restaurant.city}</h2>
                <h2>{restaurant.costForTwoMsg}</h2>
                <h2>{restaurant.avgRating} stars</h2>
            </div>
            <div className="menu-card">
                <h2>Menu</h2>
                <ul>
                {
                    Object.values(restaurant?.menu?.items).map((item => <li key = {item.id}>{item.name + "---------------" + " ₹"+item.price/100}</li>))
                }
                
                </ul>
            </div>
        </div>
    )    
}

export default RestaurantMenu