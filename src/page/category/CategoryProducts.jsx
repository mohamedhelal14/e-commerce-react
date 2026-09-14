import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/product";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="favorites_page">
      <div className="container">
        <h2 className="page_title" style={{ textTransform: "capitalize" }}>
          {categoryName ? categoryName.replace("-", " ") : "Category"}
        </h2>

        {loading ? (
          <p>Loading products...</p>
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

export default CategoryProducts;