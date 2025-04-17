import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { nombre, descripcion, precio, categoria, imagen, stock } = producto;
  const [cantidad, setCantidad] = useState(0); // cantidad de productos, empieza en 0
  const [agregado, setAgregado] = useState(false); //  para saber si se ha agregado al carrito

  const handleAdd = (cantidad) => {
    setCantidad(cantidad);
    setAgregado(true);
    console.log(`Agregaste ${cantidad} unidades de ${nombre}`);
  };

  return (
    <div className="item-detail">
      <img
        src={imagen}
        alt={nombre}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />
      <h2>{nombre}</h2>
      <p>
        <strong>Descripción:</strong> {descripcion}
      </p>
      <p>
        <strong>Precio:</strong> ${precio}
      </p>
      <p>
        <strong>Categoría:</strong> {categoria}
      </p>

      {/* Si agregado es true y cantidad es mayor que 0, mostrar enlace al carrito */}
      {agregado ? (
        cantidad > 0 ? (
          <Link to="/carrito">
            <button>Ir al carrito</button>
          </Link>
        ) : (
          <ItemCount stock={stock} initial={0} onAdd={handleAdd} />
        )
      ) : (
        <ItemCount stock={stock} initial={0} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
