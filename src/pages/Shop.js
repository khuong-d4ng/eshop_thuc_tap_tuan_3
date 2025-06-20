import React, { useState } from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [filter, setFilter] = useState("all");

  // lock sản phẩm theo tags
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (product) => Array.isArray(product.tags) && product.tags.includes(filter)
        );

  const tagDisplay = {
    all: "Tất cả sản phẩm",
    male: "Đồ nam",
    female: "Đồ nữ",
    hot: "Hot",
    sales: "Sales"
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className="w-1/6 min-w-[180px] bg-white shadow-md p-6 flex flex-col sticky"
        style={{ top: "72px", height: "calc(100vh - 72px)" }}
      >
        <h2 className="text-lg font-bold mb-4">Lọc sản phẩm</h2>
        <button
          className={`text-left py-2 px-3 rounded hover:bg-blue-50 ${filter === "all" ? "bg-blue-100 font-bold" : ""}`}
          onClick={() => setFilter("all")}
        >
          Tất cả sản phẩm
        </button>
        <button
          className={`text-left py-2 px-3 rounded hover:bg-blue-50 ${filter === "male" ? "bg-blue-100 font-bold" : ""}`}
          onClick={() => setFilter("male")}
        >
          Đồ nam
        </button>
        <button
          className={`text-left py-2 px-3 rounded hover:bg-blue-50 ${filter === "female" ? "bg-blue-100 font-bold" : ""}`}
          onClick={() => setFilter("female")}
        >
          Đồ nữ
        </button>
        <button
          className={`text-left py-2 px-3 rounded hover:bg-blue-50 ${filter === "hot" ? "bg-blue-100 font-bold" : ""}`}
          onClick={() => setFilter("hot")}
        >
          Hot
        </button>
        <button
          className={`text-left py-2 px-3 rounded hover:bg-blue-50 ${filter === "sales" ? "bg-blue-100 font-bold" : ""}`}
          onClick={() => setFilter("sales")}
        >
          Sales
        </button>
      </aside>
      {/* Tất cả sản phẩm */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">
          {tagDisplay[filter] || "Sản phẩm"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id || idx} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}