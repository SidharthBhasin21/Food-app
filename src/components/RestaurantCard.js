import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({name, cuisines, avgRating,cloudinaryImageId}) =>{
    // const {  } = props
    // console.log(props)
    return(
        <div className="resturant-card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="Food-Image"/>
            <h2>{name}</h2>
            <h3> {cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}
export default RestaurantCard;