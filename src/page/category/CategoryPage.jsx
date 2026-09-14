import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/slideProducts/product';
import './CategoryPage.css'
function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="category_products">
      {loading ? (
        <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2>{category?.replace('-', ' ')}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Molestias,
              voluptates?
            </p>
          </div>

          <div className="products">
            {categoryProducts?.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;