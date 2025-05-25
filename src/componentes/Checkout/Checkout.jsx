import React, { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const manejadorFormulario = async (evento) => {
    evento.preventDefault();

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !telefono.trim() ||
      !email.trim() ||
      !emailConfirmacion.trim()
    ) {
      setError("Por favor completá todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden. Verificalos.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    try {
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "productos", productoOrden.id);
          const productoDoc = await getDoc(productoRef);

          if (!productoDoc.exists()) {
            throw new Error(`El producto ${productoOrden.nombre} no existe.`);
          }

          const stockActual = productoDoc.data().stock;

          if (stockActual < productoOrden.cantidad) {
            throw new Error(
              `No hay suficiente stock de ${productoOrden.nombre}.`
            );
          }

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();
    } catch (err) {
      console.error("Error en el proceso de compra:", err);
      setError("Hubo un error procesando la compra: " + err.message);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>${producto.item.precio}</p>
          </div>
        ))}

        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            type="text"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            type="text"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailConfirmacion">Confirmar Email</label>
          <input
            id="emailConfirmacion"
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Confirmar Compra</button>

        {ordenId && (
          <strong>
            ¡Gracias por tu compra! Tu número de orden es:{" "}
            <span>{ordenId}</span>
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
