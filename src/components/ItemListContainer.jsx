// src/components/ItemListContainer.jsx
import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>{greeting}</h2>
      {/* Aqui no futuro vão os produtos */}
    </div>
  );
};

export default ItemListContainer;
