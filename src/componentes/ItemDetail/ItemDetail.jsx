import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CarritoContext";
import { toast } from "react-toastify";

const ItemDetail = ({ producto }) => {
  const { nombre, descripcion, precio, categoria, imagen, stock } = producto;
  const [cantidad, setCantidad] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAdd = (cantidadSeleccionada) => {
    setCantidad(cantidadSeleccionada);
    setAgregado(true);
    agregarAlCarrito(producto, cantidadSeleccionada);

    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
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

      {agregado && cantidad > 0 ? (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      ) : (
        <ItemCount stock={stock} initial={0} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
