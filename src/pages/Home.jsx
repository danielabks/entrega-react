import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const produtos = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_SL1500_.jpg",
      title: "Controle PS5 DualSense",
      price: "499,90",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71h5W7o+8wL._AC_SL1500_.jpg",
      title: "Headset Gamer HyperX",
      price: "599,00",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/61zZZV4y2JL._AC_SL1500_.jpg",
      title: "Xbox Series S",
      price: "2.699,90",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/61dJ5wT0wKL._AC_SL1500_.jpg",
      title: "PS5 Slim",
      price: "4.399,00",
    },
  ];

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {produtos.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </main>
  );
};

export default Home;
