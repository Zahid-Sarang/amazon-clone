import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

               <div className="home__row">
               <Product 
                  id="01"
                  title="See u in C by Ali Karim Sayed (Author)"
                  price={4450}
                  image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                  />
               <Product 
                  id="02"
                  title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display "
                  price={5000}
                  image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
                  />
                <Product 
                  id="03"
                  title="Apple iPhone 13 Mini (256GB) - Midnight"
                  price={70000}
                  image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
                  />
                </div>

                <div className="home__row">
                <Product 
                  id="04"
                  title="HP Chromebook x360 14-inch (35.56 cms)"
                  price={50000}
                  image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                  />
               <Product 
                  id="06"
                  title="2020 Apple MacBook Pro"
                  price={120000}
                  image="https://m.media-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg"
                  />
                </div>

                <div className="home__row">
                <Product 
                  id="06"
                  title="Mi 80 cm (32 inches) HD"
                  price={160000}
                  image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"
                  />
                </div>
            </div>
              
            
            
        </div>
    )
}

export default Home


