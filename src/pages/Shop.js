import React from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/6 min-w-[180px] bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Bộ lọc</h2>
        {/* Add filter options or categories here */}
        <button className="text-left py-2 px-3 rounded hover:bg-blue-50">Tất cả sản phẩm</button>
        <button className="text-left py-2 px-3 rounded hover:bg-blue-50">Đồ nam</button>
        <button className="text-left py-2 px-3 rounded hover:bg-blue-50">Đồ nữ</button>
        <button className="text-left py-2 px-3 rounded hover:bg-blue-50">Đồ đáng yêu</button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Tất cả sản phẩm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}