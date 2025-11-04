import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import produtos from "../data";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProdutos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(
            produtos.filter(
              (produto) => produto.categoria.toLowerCase() === categoryId.toLowerCase()
            )
          );
        } else {
          resolve(produtos);
        }
      }, 500);
    });

    fetchProdutos.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <h2>Carregando produtos...</h2>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>{greeting}</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}>
        {items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
            <div style={{
              backgroundColor: "#eaeaea", // deixa mais escuro que antes
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              padding: "20px",
              transition: "transform 0.2s",
            }}>
              <img 
                src={item.imagem} 
                alt={item.nome} 
                style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px" }} 
              />
              <h3 style={{ color: "#333", margin: "15px 0 5px" }}>{item.nome}</h3> {/* nome cinza escuro */}
              <p style={{ color: "#006400", fontWeight: "bold", fontSize: "16px" }}>
                R$ {item.preco.toFixed(2).replace(".", ",")}
              </p> {/* preço verde escuro */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
