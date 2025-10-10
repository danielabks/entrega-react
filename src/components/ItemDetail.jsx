import React from "react";

function ItemDetail({ item }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Preço: R${item.price}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
}

export default ItemDetail;
