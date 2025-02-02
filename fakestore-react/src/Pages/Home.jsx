import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import ProductList from "../Components/ProductList";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json()) // Add json() parsing
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <ProductList products={products} />
    </div>
  );
};

export default Home;
