import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "../slideProducts/product";
import { Link } from "react-router-dom";
import "./favorites.css";

function Favorites() {
  const { favorites = [] } = useContext(CartContext);

  return (
    <div className="favorites_page">
      <div className="container">
        <h2 className="page_title">Your Favorites</h2>

        {favorites.length === 0 ? (
          <div className="empty_favorites">
            <p>No Favorites Products yet.</p>
            <Link to="/" className="shop_btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="products_grid">
            {favorites.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;