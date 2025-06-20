import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // <-- Add this line

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyShop
      </Link>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        className="border rounded px-2 py-1 w-1/3"
      />
      <div className="flex gap-4 items-center">
        <button className="text-gray-600 hover:text-blue-500" onClick={() => navigate("/shop")}>Tất cả sản phẩm</button>
        <button className="relative" >
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">2</span>
        </button>
      </div>
    </header>
  );
};

export default Header;