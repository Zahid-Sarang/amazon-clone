import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="check__adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3 className="check__title">Your Shopping Details</h3>
                    {/* Cart item here */}
                    {/* Cart item here */}

                </div>

            </div>

            <div className="checkout__right">
            <div>
                <h3>SubTotal (2items) :</h3>
            </div>

           </div>
        </div>
    )
}

export default Checkout
