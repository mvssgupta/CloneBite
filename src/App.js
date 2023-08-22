import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/Body";
import HeaderComponent from './components/HeaderComponent'

const App = () => {
  return (
      <>
        <HeaderComponent/>
        <Body/>
      </>
    );
}

// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// finally using render method we are rendering the content
root.render(<App/>);
