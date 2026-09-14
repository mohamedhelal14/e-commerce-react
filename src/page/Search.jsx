import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        // فلترة المنتجات لتطابق عنوان المنتج مع كلمة البحث
        const filtered = (data.products || []).filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch search error:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="container" style={{ padding: '120px 20px 50px', minHeight: '60vh' }}>
      <h2 style={{ marginBottom: '20px', color: '#253237' }}>
        نتائج البحث عن: <span style={{ color: '#f36b08' }}>"{query}"</span>
      </h2>

      {loading ? (
        <p>جاري تحميل المنتجات...</p>
      ) : products.length === 0 ? (
        <p>لا توجد منتجات تطابق بحثك.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {products.map((product) => (
            <div 
              key={product.id} 
              style={{
                border: '1px solid #d6d6d6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={product.images[0]} 
                alt={product.title} 
                style={{ width: '100%', height: '160px', objectFit: 'contain' }}
              />
              <h3 style={{ fontSize: '16px', margin: '10px 0', height: '40px', overflow: 'hidden' }}>
                {product.title}
              </h3>
              <p style={{ color: '#f36b08', fontWeight: 'bold', fontSize: '18px' }}>
                ${product.price}
              </p>
              <Link 
                to={`/products/${product.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 15px',
                  backgroundColor: '#f36b08',
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none'
                }}
              >
                عرض التفاصيل
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;