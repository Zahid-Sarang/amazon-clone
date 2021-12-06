import React, { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{cart},dispatch] = useStateValue();   
    console.log(cart[0])
    return (
        <div className="subtotal">
       <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({cart?.lenght} items):<strong>{value}</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getCartTotal(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
        <button className="subtotal__button">Procedd to buy</button>
            
        </div>
    )
}

export default Subtotal
