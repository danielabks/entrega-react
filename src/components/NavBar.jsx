import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff"
  };

  const logoStyle = { fontSize: "24px", fontWeight: "bold" };
  const linksStyle = { display: "flex", gap: "20px" };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>GameZone</div>
      <div style={linksStyle}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/category/consoles" style={{ color: "#fff", textDecoration: "none" }}>Video Games</Link>
        <Link to="/category/jogos" style={{ color: "#fff", textDecoration: "none" }}>Jogos</Link>
        <Link to="/category/acessórios" style={{ color: "#fff", textDecoration: "none" }}>Acessórios</Link>
        <Link to="/category/assinaturas" style={{ color: "#fff", textDecoration: "none" }}>Assinaturas</Link>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
