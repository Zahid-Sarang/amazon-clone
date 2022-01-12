import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,quantity}) {
    const [{cart},dispatch] = useStateValue();
    console.log("Inside cart",cart)
     
    const addToCart = () => {
        dispatch ({
            type: "ADD_TO_CART",
            item : {
                id:id,
                title:title,
                price:price,
                image : image,
                quantity:quantity,
            }
        });
    }



    return (
        <div className="product">
           <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
                <img className="product__image" src={image} alt="" />
           </div>
           <button className="product__button" onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
