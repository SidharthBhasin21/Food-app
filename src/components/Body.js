
import RestaurantCard from "./RestaurantCard";
import { resturantData } from "../Constants";
 
const Body= () =>(
    <div className="body-container">
        {
            resturantData.map((restaurant) => {
                return (
                    <RestaurantCard {...restaurant.data} key = {restaurant.data.key} />
                )
            })
        }
    
    </div>
)
export default Body;