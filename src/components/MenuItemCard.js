import React from 'react';
import '../../index.css';
import {MENU_ITEMS_URL} from '../utils/constants'
const MenuItemCard = (props) => {
    const {imageId,name,price} = props.props;

  return (
    <>
    <div className="restaurant-card">
      <img className="restaurant-image" src={MENU_ITEMS_URL + imageId}  alt={name} />
      <div className="restaurant-details">
        <h5 className="restaurant-name">{name}</h5>
        <p className="card-price">Rs.{price/100}</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
 
    </>
  );
};

export default MenuItemCard;
