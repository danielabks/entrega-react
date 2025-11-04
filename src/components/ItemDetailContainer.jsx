import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import productsData from "../data";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const id = Number(itemId);
    const item = productsData.find((p) => p.id === id);
    setProduct(item || null);
    setAdded(false);
  }, [itemId]);

  if (!product) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#990000" }}>Produto não encontrado</h2>
        <p>Ah não! Algo deu errado nessa página.</p>
      </div>
    );
  }

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      textAlign: "center",
      padding: "40px"
    }}>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>{product.nome}</h2>
      <img
        src={product.imagem}
        alt={product.nome}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
          marginBottom: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}
      />
      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#006600", marginBottom: "10px" }}>
        Preço: R$ {product.preco.toFixed(2).replace(".", ",")}
      </p>
      <p style={{ marginBottom: "20px" }}>Estoque: {product.stock ?? 10}</p>
{!added ? (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",      // ocupa toda a largura do container
    marginTop: "20px"
  }}>
    <ItemCount stock={product.stock ?? 10} initial={1} onAdd={handleAdd} />
  </div>
) : (
  <p style={{ color: "#007700", fontWeight: "bold", marginTop: "20px" }}>
    Produto adicionado ao carrinho!
  </p>
)}
    </div>
  );
}

export default ItemDetailContainer;
