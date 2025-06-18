import React from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";
import BannerCarousel from "../components/Carousel";
import { useNavigate } from "react-router-dom"; // Add this import

export default function Home() {
  const featured = products.slice(0, 4);
  const navigate = useNavigate(); // Add this line

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
        {/* Button to access full shop */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition"
            onClick={() => navigate("/shop")}
          >
            Xem tất cả sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
}