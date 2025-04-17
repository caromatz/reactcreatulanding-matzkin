import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { imagen, nombre, descripcion, precio, id } = producto;

  return (
    <div className="product-item">
      <img
        src={imagen}
        alt={nombre}
        style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
      />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
