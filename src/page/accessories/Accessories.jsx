import React, { useEffect, useState } from 'react';
import Product from '../../components/slideProducts/product';
import './Accessories.css';

function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/products/category/mobile-accessories')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="accessories_page">
      <div className="container">
        <h2 className="page_title">Mobile & Electronics Accessories</h2>

        {loading ? (
          <p>Loading accessories...</p>
        ) : (
          <div className="products_grid">
            {products.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accessories;