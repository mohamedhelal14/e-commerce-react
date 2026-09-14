import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchResults() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(results)

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json()
                setResults(data.products || [])
            } catch (error) {
                console.error("Search Error :", error)
            } finally {
                setLoading(false)
            }
        }

        if (query) {
            fetchResults()
        } else {
            setLoading(false)
        }
    }, [query])

   return (
  <div className="category_products">
    {loading ? (
      <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
        <p>Loading products...</p>
      </div>
    ) : results.length > 0 ? (
      <div className="container">
        <div className="top_slide">
          <h2>
            Results for : {query}
          </h2>
        </div>

        <div className="products">
          {results.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    ) : (
      <div className="container">
        <p>No Results found.</p>
      </div>
    )}
  </div>
);
}

export default SearchResults