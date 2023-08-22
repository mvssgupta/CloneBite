import React from 'react';
import '../../index.css';
import {SWIGGY_CDN} from '../utils/constants'

const RestaurantCardComponent = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={SWIGGY_CDN+cloudinaryImageId} alt={name} />
      <div className="restaurant-details">
        <h5 className="restaurant-name">{name}</h5>
        <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
        <p className="restaurant-rating">Rating: {avgRating}⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
