import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregar = () => {
    onAdd(cantidad); // esta función la vas a definir en el padre
  };

  return (
    <div className="item-count">
      <div>
        <button onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
      <button onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
