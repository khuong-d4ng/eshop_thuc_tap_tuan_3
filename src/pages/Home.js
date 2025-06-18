import React from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";
import BannerCarousel from "../components/Carousel";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Sản phẩm nổi bật */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
