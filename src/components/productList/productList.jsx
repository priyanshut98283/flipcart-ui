import React, { useEffect, useState } from "react";
import Product from "../product/product";
import "../productList/productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkHBeGF-rzMRX1Dl6BdzcccuSwqQ0eLYffsOjKzOqyklVv8A2PNf0OqLdpO6EGAuXIdw512iowQT_Dsln0_S31H3HB6tAgDaqQGR2FBmqa";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fake-store-api.mock.beeceptor.com/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductList;
