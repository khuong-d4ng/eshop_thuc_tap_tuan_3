import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import products from '../assets/products.json';

const Header = ({onSearch}) => {
  const[input, setInput] = useState('')
  const[suggestions, setSuggestions] = useState([''])

    useEffect(() => {
      onSearch(input);
      if(input.trim() !==''){
        const filtered = products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()));
        setSuggestions(filtered.slice(0,8));
      }else{
        setSuggestions([]);
      }
    }, [input])
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyShop
      </Link>
      <div className='relative px-2 py-1 w-1/3'>
         <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        className="border rounded px-2 py-1 w-full"
        onChange={(e) => setInput(e.target.value)}
      />
       {suggestions.length > 0 && (
        <ul className="absolute top-16 bg-white border border-gray-300 rounded w-full max-w-3xl z-10 shadow-md">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setInput(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      </div>
     
      <div className="flex gap-4 items-center">
        <button className="text-gray-600 hover:text-blue-500">Danh mục</button>
        <button className="relative">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">2</span>
        </button>
      </div>
     
    </header>
  );
};

export default Header;