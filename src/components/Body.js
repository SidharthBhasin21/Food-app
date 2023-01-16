
import RestaurantCard from "./RestaurantCard";
import { resturantData } from "../Constants";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"


function filterData(searchText,restaurants){
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
        )
}
const Body= () =>{
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() =>{
        getRestaurants();

    },[])

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );   
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    } 
    
    //  if(filteredRestaurants.length == 0) return <h1>Ohh...No Restaurant by that Name</h1>


    return allRestaurants?.length === 0 ? <Shimmer/> :( 
        <>
        <div className="search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search"
                value={searchText}
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button 
            className="search-btn"
            onClick={ () =>{

                const data = filterData(searchText,allRestaurants)
                console.log(data)
                setFilteredRestaurants(data);
            }}
            >
            Search</button>
        </div>
        <div className="body-container">
            {
                filteredRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key = {restaurant.data.key} />
                    )
                })
            }
    </div>
    </>
    )
    
}
  
export default Body;