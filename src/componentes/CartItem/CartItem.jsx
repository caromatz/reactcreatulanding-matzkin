import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Precio unitario: ${item.precio}</p>
      <p>Cantidad: {cantidad}</p>
      <p>Subtotal: ${item.precio * cantidad}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
