import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
      🛒 {totalQuantity > 0 && <span>({totalQuantity})</span>}
    </Link>
  );
}

export default CartWidget;
