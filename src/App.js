// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css'; // aqui você importa o CSS válido

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à GameStore! Confira nossos games incríveis!" />
    </div>
  );
}

export default App;
