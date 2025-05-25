import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import "./ItemListContainer.css";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ welcomeMessage }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const consulta = categoriaId
      ? query(productosRef, where("categoria", "==", categoriaId))
      : productosRef;

    getDocs(consulta)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setError("Hubo un problema al cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (error) return <p>{error}</p>;

  return (
    <div className="item-list-container">
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : welcomeMessage}</h2>
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
