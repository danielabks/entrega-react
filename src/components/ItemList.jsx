import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
}

export default ItemList;
