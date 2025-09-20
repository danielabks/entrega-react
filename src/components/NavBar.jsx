// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#1a1a1a",
      color: "#fff"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>GameStore</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "15px", margin: 0 }}>
        <li><a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
        <li><a href="#catalog" style={{ color: "#fff", textDecoration: "none" }}>Catálogo</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contato</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
