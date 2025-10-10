import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#222", padding: "1rem" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
      <Link to="/categoria/console" style={{ color: "#fff", marginRight: "1rem" }}>Consoles</Link>
      <Link to="/categoria/jogos" style={{ color: "#fff", marginRight: "1rem" }}>Jogos</Link>
      <Link to="/categoria/acessorios" style={{ color: "#fff" }}>Acessórios</Link>
    </nav>
  );
}

export default NavBar;
