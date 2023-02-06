import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import { addItem } from "./utils/cartSlice";
import useRestaurants from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant,setRestaurant] = useState(null);

  const restaurant = useRestaurants(resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return restaurant == null ? (
    <Shimmer />
  ) : (
    <div className="menu-page">
      <div>
        <h3>Restaurant name: {restaurant?.name} </h3>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.area}</h2>
        <h3>{restaurant.city}</h3>
        <span>{restaurant.costForTwoMsg} </span>
        <span>{restaurant.avgRating} star</span>
      </div>
      <div className="menu-card">
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="menu-list">
              {item.name + "---------------" + " ₹" + item.price / 100}{" "}
              <button
                className="add-button"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
