import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../rating/rating.jsx';
import "../product/product.css";

const Product = ({ product, onAddToCart, image }) => {
  return (
    <div className="product-card">
      <div className='left-sidebar'>
      <img src={image} alt={product.title} className="product-image" />
      </div>
      <div className='right-sidebar'>
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <StarRating rating={4.5} />
        <p>({5} reviews)</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Product;