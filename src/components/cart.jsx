import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./product/product.css";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsWithQuantity = response.data.map(product => ({ ...product, quantity: 1 }));
        setProducts(productsWithQuantity);
        setCart(productsWithQuantity); // Assuming initially all products are in the cart
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCart(cart.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCart(cart.map(product => 
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  const handleSaveForLater = (id) => {
    const productToSave = cart.find(product => product.id === id);
    setCart(cart.filter(product => product.id !== id));
    setSavedForLater([...savedForLater, productToSave]);
  };

  const handleDeleteMultiple = (ids) => {
    setCart(cart.filter(product => !ids.includes(product.id)));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  return (
    <div >
      <h1>Cart</h1>
      <ul style={{flexDirection:'column',display:'flex',lineHeight:2}}>
        {cart.map(product => (
          <li key={product.id} style={{border: '2px solid #f5f5f5',
            borderRadius: '5px',
            padding: '20px',
            margin: '20px',
            maxWidth: '800px',
            textAlign: 'center',
            backgroundColor:'white'}}>
            <div style={{float:'left'}}>
            <img src={product.image} alt={product.title} style={{ width: '100px', marginRight: '10px' }} />
            </div>
            <div style={{alignContent:'center',marginLeft:'200px'}}>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
              <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button onClick={() => handleSaveForLater(product.id)}>Save for Later</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${calculateTotalAmount()}</h2>
    </div>
  );
};

export default CartPage;
