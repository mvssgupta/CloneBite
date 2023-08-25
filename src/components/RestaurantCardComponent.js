import React from 'react';
import '../../index.css';
import {SWIGGY_CDN} from '../utils/constants'

const RestaurantCardComponent = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
  return (
    <div className="flex flex-col items-center border shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-neutral-100 transition-transform duration-200 ease-[ease-in-out] h-72 w-56 m-2.5 p-4 rounded-lg border-solid border-gray-300 hover:scale-105">
      <img className="w-48 h-3/5 rounded-lg" src={SWIGGY_CDN+cloudinaryImageId} alt={name} />
      <div className="text-center h-2/5">
        <h5 className="text-md m-1 font-semibold">{name}</h5>
        <p className="text-md m-1">{cuisines?.slice(0,(cuisines.length>3)?3:cuisines.length).join(", ")}</p>
        <p className="text-md m-1">Rating: {avgRating}⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
