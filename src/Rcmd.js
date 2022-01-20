import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Rcmd.css";

const Rcmd = ({ category }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(`product data ${response.data}`);
      setProduct(response.data);
    };
    data();
  }, []);
  return (
    <div className="Rcmd">
      <h1 className="Rcmd__h1">Recommendation</h1>

      {product
        .filter((item) => {
          return item.category === category;
        })
        .map((item) => (
          <div className="Rcmd_data">
            <div className="cartItem__info">
              <p>{item.title}</p>

              <p className="cartItem__price">
                <bold>₹</bold>
                <strong>{item.price}</strong>
              </p>
              <img className="cartItem__image" src={item.image} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rcmd;
