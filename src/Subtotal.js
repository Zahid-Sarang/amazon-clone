import React, { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const [{cart},dispatch] = useStateValue();   
    const history = useHistory()
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
        <button className="subtotal__button" onClick={() => history.push('/payment') }>Procedd to buy</button>
            
        </div>
    )
}

export default Subtotal
