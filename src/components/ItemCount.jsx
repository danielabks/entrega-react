import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
  <button onClick={decrement}>-</button>
  <span>{count}</span>
  <button onClick={increment}>+</button>
</div>

      <button onClick={() => onAdd(count)} style={{ marginTop: "10px" }}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ItemCount;
