import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/products.json";

export default function ProductInfo() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="flex flex-col items-center p-8">
      <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded mb-6 shadow" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-600 font-semibold mb-4">{product.price}₫</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
        Thêm vào giỏ
      </button>
    </div>
  );
}