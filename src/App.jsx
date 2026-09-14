import React from 'react';
import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import Favorites from "./components/favorites/Favorites";
import About from './page/about/About';
import Accessories from './page/accessories/Accessories';
import Blog from './page/blog/Blog';
import Contact from './page/contact/Contact';
import CategoryProducts from './page/category/CategoryProducts';
import Search from './page/Search'; 
import Login from './page/login/Login';
import Register from './page/register/Register';

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#e9e9e9',
            borderRadius: '5px',
            padding: '14px'
          }
        }} 
      />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;