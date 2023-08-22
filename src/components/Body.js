import { useState } from "react";
import { resDetails } from "../utils/constants";
import RestaurantCardComponent from './RestaurantCardComponent'

const Body = () => {
  const[listOfRestaurants,setListOfRestaurants] = useState(resDetails);

    return (
      <div className="body">
       <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            <button onClick={()=> setListOfRestaurants(resDetails.filter(data => data.info.avgRating>4))}>Top Rated Restaurants</button>
          </div>
        <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (<RestaurantCardComponent key={restaurant.info.id} resData = {restaurant}/>))} 
        </div>
      </div>
    );
  };

  export default Body;