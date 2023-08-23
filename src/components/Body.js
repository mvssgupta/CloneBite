import { useState,useEffect } from "react";
import RestaurantCardComponent from './RestaurantCardComponent'
import axios from "axios";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("")

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(()=>{
    fetchDataFromApi();
  },[])

  const fetchDataFromApi =  async() => {
    const res = await axios.get("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const resData = res.data
    setListOfRestaurants(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants?.length===0)
  {
    return <ShimmerUI></ShimmerUI>
  }

    return (
      <div className="body">
       <div className="search-bar">
            <input type="text" placeholder="Search" value={searchText} onChange={handleSearch}/>
            <button onClick={() => setFilteredRestaurants(listOfRestaurants?.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())))}>Search</button>
            <button onClick={()=> setFilteredRestaurants(listOfRestaurants?.filter(data => data?.info?.avgRating>=4))}>Top Rated Restaurants</button>
          </div>
        <div className="restaurant-container">
        {filteredRestaurants?.map((restaurant) => (<Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}> <RestaurantCardComponent resData = {restaurant}/></Link>))} 
        </div>
      </div>
    );
  };

  export default Body;