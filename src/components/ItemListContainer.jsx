import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 500);
    });

    fetchItems.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{categoryId ? `Categoria: ${categoryId}` : "Catálogo completo"}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
