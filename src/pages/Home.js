import React from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3); // 3 sản phẩm nổi bật

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
