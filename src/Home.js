import React from 'react';
import './Home.css';
import { Data } from './MobileData';

import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

               <div className="home__row">
              {
                Data.filter((item) => item.category === "Mobile"
                ).map((item) => {
                  return (
                    <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.img} quantity={item.quantity} />
                  )
                })
              }
                </div>

                <div className="home__row">
                {
                Data.filter((item) => item.category === "Men"
                ).map((item) => {
                  return (
                    <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.img} quantity={item.quantity} />
                  )
                })
              }
               
                </div>

                <div className="home__row">
               
                </div>
            </div>
              
            
            
        </div>
    )
}

export default Home


