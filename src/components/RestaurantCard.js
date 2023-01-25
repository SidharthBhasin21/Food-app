import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({name, cuisines, avgRating,cloudinaryImageId,deliveryTime}) =>{
    // const {  } = props
    // console.log(props)
    return(
        <div className="resturant-card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="Food-Image" className="rest-img"/>
            <h2 className="rest-name">{name}</h2>
            <h3 className="cuisines"> {cuisines.join(", ")}</h3>
            <h4><span>{avgRating} * </span>   {deliveryTime} min   </h4>
        </div>
    )
}


export default RestaurantCard;