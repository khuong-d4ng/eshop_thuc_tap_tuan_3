import React from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tất cả sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
