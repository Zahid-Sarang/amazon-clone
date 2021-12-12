import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({id,title,price,image}) => { 
    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct__Image" src={image}/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <bold>₹</bold>
                <strong>{price}</strong>
            </p>
            <button className='checkoutProduct__button'>Remove From Cart</button>
        </div>
        
            
        </div>
    )
}

export default CheckoutProduct
