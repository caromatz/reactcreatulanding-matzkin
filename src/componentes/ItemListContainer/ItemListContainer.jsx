import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h2>{props.welcomeMessage}</h2>
    </div>
  );
};

export default ItemListContainer;
