import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./componentes/NotFound/NotFound";
import Cart from "./componentes/Cart/Cart";
import { CarritoProvider } from "./context/CarritoContext";
import Checkout from "./componentes/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer welcomeMessage="¡Bienvenidos a Buty By Carolina! 👠" />
            }
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CarritoProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
