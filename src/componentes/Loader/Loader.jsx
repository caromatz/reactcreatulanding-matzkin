import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

const loader = () => {
  return (
    <div>
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default loader;
