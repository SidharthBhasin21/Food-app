import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
  costForTwoString
}) => {
  // const {  } = props
  // console.log(props)
  return (
    <div className="resturant-card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Food-Image"
        className="rest-img"
      />
      <h2 className="rest-name">{name}</h2>
      <h3 className="cuisines"> {cuisines.join(", ")}</h3>
      <div className="rest-info-container">
        <span className="rating">{avgRating} * </span>
        <span className="deliveryTime"> {deliveryTime} min</span>
        <span className="costfortwo">{costForTwoString} </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
