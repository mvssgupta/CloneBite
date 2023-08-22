import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import foodLogo from "./Images/foodLogo.jpg";
import RestaurantCardComponent from "./RestaurantCardComponent";

const Body = () => {
  return (
    <>
    <RestaurantCardComponent
      name="Example Restaurant"
      cuisine="Italian"
      rating={4.5}
      imageUrl={foodLogo}
    />
    </>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={foodLogo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="user-icon">
          <img src="user-icon.png" alt="User Icon" />
        </div>
      </div>
      <Body />
    </>
  );
};

// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// finally using render method we are rendering the content
root.render(<HeaderComponent />);
