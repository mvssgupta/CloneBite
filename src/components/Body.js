import { useState,useEffect } from "react";
import RestaurantCardComponent,{promotedRestaurantCard} from './RestaurantCardComponent'
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
  const HighRatedRestaurantCard = promotedRestaurantCard(RestaurantCardComponent);

  useEffect(()=>{
    fetchDataFromApi();
  },[])

  const fetchDataFromApi =  async() => {
    const res = await axios.get("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const resData = res.data
    setListOfRestaurants(resData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(resData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants?.length===0)
  {
    return <ShimmerUI></ShimmerUI>
  }

    return (
      <div>
       <div className="flex items-center justify-center mx-2.5 my-0">
            <input className=" rounded mr-1 p-1 border-none" type="text" placeholder="Search" value={searchText} onChange={handleSearch}/>
            <button className=" bg-cyan-600 text-white rounded cursor-pointer mx-2.5 my-1 px-2.5 py-1 border-none" onClick={() => setFilteredRestaurants(listOfRestaurants?.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())))}>Search</button>
            <button className=" bg-cyan-600 text-white rounded cursor-pointer mx-2.5 my-1 px-2.5 py-1 border-none" onClick={()=> setFilteredRestaurants(listOfRestaurants?.filter(data => data?.info?.avgRating>=4))}>Top Rated Restaurants</button>
          </div>
        <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => (<Link className="no-underline text-black" key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}>
        {(restaurant.info.avgRating>4)?(<HighRatedRestaurantCard resData = {restaurant}/>):(<RestaurantCardComponent resData = {restaurant}/>)}
         </Link>))} 
        </div>
      </div>
    );
  };

  export default Body;
