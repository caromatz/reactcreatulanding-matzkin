import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategoria } from "../asyncmock.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ welcomeMessage }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProductos = categoriaId ? getProductosByCategoria : getProductos;

    fetchProductos(categoriaId)
      .then((data) => {
        setProductos(data);
      })
      .catch((err) => {
        setError("Hubo un problema al cargar los productos.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-list-container">
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : welcomeMessage}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
