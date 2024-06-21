import React from "react";
import ProductList from "./components/productList/productList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Product Store</h1>
      <ProductList />
    </div>
  );
};

export default App;
