import React from 'react';
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart},dispatch] = useStateValue();
    return (
        <div className='header'> 
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                {/* {material ui} */}
                <SearchIcon className="header__searchIcon"/>

            </div>
            <div className="header__nav">
                <div className='header__option'>
                    <span 
                       className="header__optionLineOne">Hello</span>
                    <span
                        className="header__optionLineTwo">sign In</span>
                </div>
                <div className='header__option'>
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                        
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                 </div>
            </div>
            <Link to="/checkout">
            <div  className="header__optionBasket">
                <ShoppingCartIcon  />
                <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
            </div>
            </Link>
            
        </div>
    )
}

export default Header
