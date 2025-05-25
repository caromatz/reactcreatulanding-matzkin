import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <i className="bi bi-cart"></i>
        {cantidadTotal > 0 && (
          <span className="cart-count">{cantidadTotal}</span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
