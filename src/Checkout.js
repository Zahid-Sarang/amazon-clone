import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{cart,user},dispatch] = useStateValue();  
    return (
        <div className="checkout">
          <div className="checkout--left">
              <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
            <div>
            <h1>Hello, {user?.email}</h1>
              <h3 className="checkout--title">Your Shopping Details</h3>
             {
              cart.map((item) => (
                <CheckoutProduct
                key={item.id}
                id={item.id} 
                title={item.title} 
                price={item.price}
                image={item.image}
                 />
              ))
             }
            </div>
          </div>
    
          <div className="checkout--right">
            <Subtotal/>
          </div>
        </div>
      );
    }
    

export default Checkout
