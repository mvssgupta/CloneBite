import { useState,useEffect } from "react";
import RestaurantCardComponent from './RestaurantCardComponent'
import axios from "axios";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const[listOfRestaurants,setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchDataFromApi();
  },[])

  const fetchDataFromApi =  async() => {
    const res = await axios.get("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const resData = res.data
    setListOfRestaurants(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants?.length===0)
  {
    return <ShimmerUI></ShimmerUI>
  }

    return (
      <div className="body">
       <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            <button onClick={()=> setListOfRestaurants(listOfRestaurants.filter(data => data.info.avgRating>=4))}>Top Rated Restaurants</button>
          </div>
        <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => (<RestaurantCardComponent key={restaurant.info.id} resData = {restaurant}/>))} 
        </div>
      </div>
    );
  };

  export default Body;