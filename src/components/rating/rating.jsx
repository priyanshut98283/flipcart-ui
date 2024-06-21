import React from 'react';
import PropTypes from 'prop-types';
import '../rating/rating.css';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
  
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="star full">&#9733;</span>
        ))}
        {halfStar && <span className="star half">&#9733;</span>}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
          <span key={index} className="star empty">&#9734;</span>
        ))}
      </div>
    );
  };
  
  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
  };
  
  export default StarRating;