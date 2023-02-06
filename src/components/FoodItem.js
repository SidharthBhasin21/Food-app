import { IMG_CDN_URL } from "../Constants";

const FoodItem = ({
  name,
  category,
  description,
  price,
  cloudinaryImageId,
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
      <h3 className="cuisines"> {description}</h3>
      <div className="rest-info-container">
        <span className="deliveryTime"> {category} </span>
        <span className="costfortwo">{price / 100} </span>
      </div>
    </div>
  );
};

export default FoodItem;
