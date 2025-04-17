import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductoById(id)
      .then((data) => {
        if (data) {
          setProducto(data);
        } else {
          setError("Producto no encontrado.");
        }
      })
      .catch(() => setError("Hubo un error al cargar el producto."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
