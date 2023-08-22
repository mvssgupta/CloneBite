import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import foodLogo from "../Images/foodLogo.jpg";
import userIcon from '../Images/user-icon.jpg'
import RestaurantCardComponent from "./components/RestaurantCardComponent";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";

const App = () => {
  return (
      <Body/>
    );
}

// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// finally using render method we are rendering the content
root.render(<App/>);
