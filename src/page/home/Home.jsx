import React, { useEffect, useState } from 'react'

import HeroSlider from '../../components/HeroSlider'

import "./Home.css"

import SlideProduct from '../../components/slideProducts/slideProduct'

const categories =[
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",

]
function Home() {



  

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const results = await Promise.all(
          categories.map(async (category) => {

            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );

            const data = await res.json();

            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);

        setProducts(productsData);

      } catch (error) {
        console.error("Error Fetching", error);
      }finally{
        setLoading(false)
      }


    };

    fetchProducts();

  }, []);

  console.log(products);

  

  return (
  <div>

    <HeroSlider />

    {loading ? (
      <p>loading...</p>
    ) : (
      categories.map((category) => (
        <SlideProduct
          key={category}
          data={products[category]}
          title={category.replace("-"," ")}
        />
      ))
    )}

  </div>
)}

export default Home
