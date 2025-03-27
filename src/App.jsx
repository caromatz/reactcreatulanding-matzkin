import "./App.css";
import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer welcomeMessage="¡Bienvenidos a nuestra tienda de Cosmética Natural! 🌼" />
    </div>
  );
}

export default App;
