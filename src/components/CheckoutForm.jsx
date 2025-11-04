// src/components/CheckoutForm.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: totalPrice
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return <h2>Compra realizada! Seu ID de pedido é: {orderId}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finalizar Compra</h2>
      {loading && <p>Enviando pedido...</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input type="text" name="name" placeholder="Nome" value={buyer.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefone" value={buyer.phone} onChange={handleChange} required />
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
