import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import star from "../assets/images/icons/star.svg";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "../styles/order.css";

function Order() {
  const location = useLocation();
  const { name, value } = location.state || {};

  const rating = useRef((4 + Math.random()).toFixed(1));
  const review = useRef(Math.floor(Math.random() * (1000 - 50 + 1)) + 50);

  const basePrice = useRef(
    Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000
  );

  const [currentPrice, setCurrentPrice] = useState(basePrice.current * 0.5);
  const [selectedWeight, setSelectedWeight] = useState(0.5);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleWeightChange = (weight) => {
    if (weight !== selectedWeight) {
      setSelectedWeight(weight);
      const totalPrice = basePrice.current * weight;
      setCurrentPrice(totalPrice);
    }
  };

  const handleQuantityChange = (sign) => {
    if (sign === "+" && currentQuantity < 99) {
      setCurrentQuantity(currentQuantity + 1);
    } else if (sign === "-" && currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="order">
        <div className="order-img">
          <img src={value} alt={name} className="cake_img" />
        </div>
        <div className="order-description">
          <h1>{name}</h1>
          <div className="ratings">
            <p>{rating.current}</p>
            <img src={star} alt="" className="star" />
            <p>({review.current} reviews)</p>
          </div>
          <h4>Price</h4>
          <p>₹ {currentPrice.toLocaleString()}</p>
          <h4>Weight</h4>
          <ul id="weight-list">
            <li
              className={`weight-opt ${
                selectedWeight === 0.5 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(0.5)}
            >
              0.5 kg
            </li>
            <li
              className={`weight-opt ${
                selectedWeight === 1.0 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(1.0)}
            >
              1.0 kg
            </li>
            <li
              className={`weight-opt ${
                selectedWeight === 1.5 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(1.5)}
            >
              1.5 kg
            </li>
            <li
              className={`weight-opt ${
                selectedWeight === 2.0 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(2.0)}
            >
              2.0 kg
            </li>
            <li
              className={`weight-opt ${
                selectedWeight === 2.5 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(2.5)}
            >
              2.5 kg
            </li>
            <li
              className={`weight-opt ${
                selectedWeight === 3.0 ? "selected" : ""
              }`}
              onClick={() => handleWeightChange(3.0)}
            >
              3.0 kg
            </li>
          </ul>
          <h4>Quantity</h4>
          <div
            className="btn-group quantity-button"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleQuantityChange("-")}
            >
              -
            </button>
            <div className="quantity">{currentQuantity}</div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleQuantityChange("+")}
            >
              +
            </button>
          </div>
          <button type="button" className="btn btn-danger">
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
