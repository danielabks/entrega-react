import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-blue-600 font-bold mt-1">R$ {price}</p>
    </div>
  );
};

export default ProductCard;
