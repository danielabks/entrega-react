
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      {/* Não colocamos BrowserRouter aqui para evitar duplicação */}
      <NavBar />
      <Routes>
        {/* Página inicial: Lançamentos */}
        <Route
          path="/"
          element={<ItemListContainer greeting="Lançamentos" />}
        />
        {/* Categorias */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/* Detalhes do produto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        {/* Carrinho */}
        <Route path="/cart" element={<Cart />} />
        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
