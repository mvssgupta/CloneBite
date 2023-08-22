import React from 'react';
import './index.css';

const RestaurantCardComponent = ({ name, cuisine, rating, imageUrl }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} alt={name} />
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-rating">Rating: {rating}/5</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
