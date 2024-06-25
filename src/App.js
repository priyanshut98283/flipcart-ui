import React from "react";
import ProductList from "./components/productList/productList";
import "./App.css";
import CartPage from "./components/cart";

const App = () => {
  return (
    <div className="app">
      <h1>Product Store</h1>
      <ProductList />
      <div style={{display:'flex'}}>
        <div style={{maxWidth:'900px'}}>
        <CartPage/>
        </div>
        <div style={{maxWidth:'600px'}}>
        <CartPage/>
        </div>
      </div>
    </div>
  );
};

export default App;
