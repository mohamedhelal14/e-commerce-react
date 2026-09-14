import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import SearchBox from './SearchBox'; // أو ./SreachBox حسب اسم الملف لديك
import { FaRegHeart } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import './header.css';
import { CartContext } from '../context/CartContext';

function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <SearchBox />

        <div className="header_icons">
          <Link to="/favorites" className="icon">
            <FaRegHeart />
            <span className="count">{favorites?.length || 0}</span>
          </Link>

          <Link to="/cart" className="icon">
            <TiShoppingCart />
            <span className="count">{cartItems?.length || 0}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;