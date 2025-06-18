import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-green-600 font-medium">{product.price}₫</p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
