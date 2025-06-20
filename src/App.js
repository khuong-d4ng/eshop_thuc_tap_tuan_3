import Reac, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import compoent 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import ProductInfo from "./pages/ProductInfo";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onSearch={setSearchTerm}/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
