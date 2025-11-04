import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <Link to={`/item/${product.id}`}>
        <img src={product.image} alt={product.name} style={{ width: "100%" }} />
        <h3>{product.name}</h3>
      </Link>
      <p>R$ {product.price}</p>
    </div>
  );
}

export default Item;
