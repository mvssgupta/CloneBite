import React from 'react';
import './index.css';

const RestaurantCardComponent = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} />
      <div className="restaurant-details">
        <h5 className="restaurant-name">{name}</h5>
        <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
        <p className="restaurant-rating">Rating: {avgRating}⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
