import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      Total Cart Items {cartItems.length}
      <button className="clear-cart-button" onClick={() => handleClearCart()}>
        {" "}
        Clear Cart
      </button>
      <div className="cart-container">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
