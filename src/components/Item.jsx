import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px", textAlign: "center" }}>
      <h3>{item.name}</h3>
      <p>R$ {item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default Item;
