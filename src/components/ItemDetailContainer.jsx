import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId));
      }, 500);
    });

    fetchItem.then(res => setItem(res));
  }, [itemId]);

  return (
    <div style={{ padding: "1rem" }}>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhes...</p>}
    </div>
  );
}

export default ItemDetailContainer;
