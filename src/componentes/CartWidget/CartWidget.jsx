import React, { useState } from "react";
import "./CartWidget.css"

const CartWidget = () => {
  const [cartItems, setCartItems] = useState(0);

  const addItemToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="cart-widget">
      <i className="bi bi-cart" onClick={addItemToCart}></i>
    </div>
  );
};

export default CartWidget;
