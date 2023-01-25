
import RestaurantCard from "./RestaurantCard";
// import { resturantData } from "../Constants";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import {useOnline} from "./utils/useOnline";


const Body= () =>{
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    // console.log(allRestaurants, filteredRestaurants?.length)
    useEffect(() =>{

            getRestaurants();  
    },[])

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7266016&lng=74.8570259&page_type=DESKTOP_WEB_LISTING"
        );   
        const json = await data.json();
        console.log(json?.data?.cards[0]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards)
    } 
        
    //  if(filteredRestaurants.length == 0) return <h1>Ohh...No Restaurant by that Name</h1>
    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Can you please check your internet....u seem offline</h1>
    }

    return allRestaurants?.length === 0 ? <Shimmer/> :( 
        <div className="body-container">
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
            <div className="restaurants-card-container">
                {
                    filteredRestaurants?.map((restaurant) => {
                        return (
                            <Link to ={"/restaurant/"+restaurant.data.id}>
                                <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
                            </Link>
                        )
                     })
                }
        </div>
    </div>
    )
    
}
  
export default Body;