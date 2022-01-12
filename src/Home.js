import React from 'react';
import './Home.css';
import { MobileData } from './MobileData';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

               <div className="home__row">
              {
                MobileData.map((item) => {
                  return (
                    <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.img} quantity={item.quantity} />
                  )
                })
              }
                </div>

                <div className="home__row">
                <Product 
                  id="04"
                  title="HP Chromebook x360 14-inch (35.56 cms)"
                  price={50000}
                  image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                  quantity = {1}
                  />
               <Product
                  id="05"
                  title="2020 Apple MacBook Pro"
                  price={120000}
                  image="https://m.media-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg"
                  quantity = {1}
                  />
                </div>

                <div className="home__row">
                <Product 
                  id="06"
                  title="Mi 80 cm (32 inches) HD"
                  price={160000}
                  image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"
                  quantity = {1}
                  
                  />
                </div>
            </div>
              
            
            
        </div>
    )
}

export default Home


