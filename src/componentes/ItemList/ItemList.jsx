import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="product-list">
      {productos.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        productos.map((producto) => (
          <Item key={producto.id} producto={producto} /> 
        ))
      )}
    </div>
  );
};

export default ItemList;
