import React, { useContext } from 'react';
import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaCartArrowDown, FaRegHeart, FaShare, FaCheck, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

function Product({ item }) {
  const { cartItems = [], addToCart, addToFavorites, removeFromFavorites, favorites = [] } = useContext(CartContext);

  // 1. التثبت من وجود العنصر والـ id الخاص به لمنع الـ Uncaught TypeError
  if (!item || !item.id) {
    return null;
  }

  // 2. استخدام التمرير الآمن (?.) عند التكرار على المصفوفات
  const isInCart = cartItems.some((i) => i?.id === item.id);
  const isInFav = favorites.some((i) => i?.id === item.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(item);
      toast.success(`${item.title} added to cart`);
    }
  };

  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(item.id);
      toast.error(`${item.title} removed from favorites`);
    } else {
      addToFavorites(item);
      toast.success(`${item.title} added to favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/products/${item.id}`}>
        {isInCart && (
          <span className="status_cart">
            <FaCheck /> in cart
          </span>
        )}
        <div className="img_product">
          <img src={item.images?.[0] || item.thumbnail || ''} alt={item.title || 'product'} />
        </div>

        <p className="name_product">{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>

        <p className="price">$ {item.price}</p>
      </Link>

      <div className="icons">
        <span className="btn_addtocart" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>

        <span className={`icon_fav ${isInFav ? 'active' : ''}`} onClick={handleAddToFav}>
          {isInFav ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>

        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;