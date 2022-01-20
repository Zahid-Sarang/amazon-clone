import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

const CartItem = ({id, title, price, image, quantity }) => {
  const [{cart},dispatch] = useStateValue();
  
   const increment = (id) => {
      return dispatch ({
       type: "INCREMENT",
       payload: id
     });
   }

   const decrement = (id) => {
    return dispatch ({
     type: "DECREMENT",
     payload: id
   });
 }


 const removetoCart = (id) => {
  return dispatch ({
   type: "REMOVE_FROM_CART",
   payload: id
 });
}



  return (
    <div className="cartItem">
      <div className="cartItem__info">
        <p>{title}</p>

        <p className="cartItem__price">
          <bold>₹</bold>
          <strong>{price}</strong>
        </p>
        <img className="cartItem__image" src={image} alt="" />
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <button className="cartItem__button" onClick={() => removetoCart(id)}>Remove to cart</button>
      </div>
     
    </div>
  );
};

export default CartItem;
