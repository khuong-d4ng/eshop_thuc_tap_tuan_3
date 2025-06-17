import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import productsData from './assets/products.json';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex flex-col md:flex-row gap-6">
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </section>
        <aside className="w-full md:w-1/3 bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Giỏ hàng</h3>
          {cart.map(item => (
            <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
          ))}
          <div className="mt-2 font-bold">
            Tổng: {cart.reduce((sum, item) => sum + item.price, 0)}₫
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
