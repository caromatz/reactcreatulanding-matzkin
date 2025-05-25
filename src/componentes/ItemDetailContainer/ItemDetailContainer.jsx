import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          const data = res.data();
          const productoCompleto = { id: res.id, ...data };
          setProducto(productoCompleto);
        } else {
          setError("Producto no encontrado.");
        }
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setError("Hubo un problema al cargar el producto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
