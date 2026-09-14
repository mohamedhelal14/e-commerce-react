import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function SerachBox() {
  const [serachTerm, setSerachTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSbumit = (e) => {
    e.preventDefault();
    if (serachTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(serachTerm.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const query = serachTerm.trim().toLowerCase();
      if (!query) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        
        // فلترة النتائج حسب عنوان المنتج فقط
        const filtered = (data.products || []).filter((item) =>
          item.title.toLowerCase().includes(query)
        );

        setSuggestions(filtered.slice(0, 6));
      } catch (error) {
        console.error("Search Error :", error);
        setSuggestions([]);
      }
    };

    const debonuce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debonuce);
  }, [serachTerm]);

  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <div 
      className="serachBox_Contaienr" 
      style={{ 
        position: 'relative', 
        width: '500px',
        zIndex: 100000 
      }}
    >
      <form onSubmit={handleSbumit} className="search_box" style={{ width: '100%' }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For Products..."
          value={serachTerm}
          onChange={(e) => setSerachTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul
          className="suggestions"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            listStyle: 'none',
            border: '1px solid #d6d6d6',
            borderRadius: '0 0 10px 10px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            zIndex: 100001,
            maxHeight: '320px',
            overflowY: 'auto',
            padding: '5px 0',
            margin: 0,
          }}
        >
          {suggestions.map((item) => (
            <li
              key={item.id}
              style={{
                borderBottom: '1px solid #eee',
                listStyle: 'none',
              }}
            >
              <Link
                to={`/products/${item.id}`}
                onClick={() => setSuggestions([])}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 15px',
                  textDecoration: 'none',
                  color: '#253237',
                  width: '100%',
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    minHeight: '40px',
                    maxWidth: '40px',
                    maxHeight: '40px',
                    objectFit: 'contain',
                    borderRadius: '4px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SerachBox;