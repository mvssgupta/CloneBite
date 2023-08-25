import React from 'react';
import '../../index.css';
import {MENU_ITEMS_URL} from '../utils/constants'
const MenuItemCard = (props) => {
    const {imageId,name,price} = props.props;

  return (
    <>
    <div className="flex flex-col items-center shadow-sm bg-neutral-100 transition-transform duration-200 ease-[ease-in-out] h-64 w-50 m-2.5 p-4 rounded-lg border-solid border-gray-500 hover:scale-105">
      <img className="w-48 h-3/5 rounded-lg" src={MENU_ITEMS_URL + imageId}  alt={name} />
      <div className="text-center h-2/5">
        <h5 className="text-md font-semibold m-1">{name}</h5>
        <p className="m-1">Rs.{price/100}</p>
        <button className="bg-blue-500 text-white rounded cursor-pointer self-end m-1 px-4 py-2 border-none">Add to Cart</button>
      </div>
    </div>
 
    </>
  );
};

export default MenuItemCard;
