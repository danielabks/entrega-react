// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0)
    return <h2>Seu carrinho está vazio</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Seu Carrinho</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src={item.imagem} alt={item.nome} style={{ width: "80px", marginRight: "10px" }} />
          <div>
            <h3>{item.nome}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Subtotal: R$ {(item.preco * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </div>
        </div>
      ))}
      <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
      <button onClick={clearCart}>Limpar Carrinho</button>
      <Link to="/checkout" style={{ display: "block", marginTop: "20px" }}>
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
}

export default Cart;
