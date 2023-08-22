import { resDetails } from "../utils/constants";

const Body = () => {
    return (
      <div className="body">
       <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        <div className="restaurant-container">
        {resDetails.map((resData) => (<RestaurantCardComponent key={resData.info.id} resData = {resData}/>))} 
        </div>
      </div>
    );
  };

  export default Body;