import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/products.json";

export default function ProductInfo() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 items-start">
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-[300px] h-[300px] object-cover rounded shadow"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

        <p className="text-gray-600">{product.description}</p>

        <p className="text-green-600 text-xl font-semibold">{product.price}₫</p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition w-fit">
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
