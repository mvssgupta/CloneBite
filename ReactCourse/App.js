import React from "react";
import ReactDOM from "react-dom/client";



//JSX -> html LIKE syntax
const Greeting = () => <h1>Hello Developers!</h1>;


const GreetComponent = () => (
    <>
        <Greeting/>
        <h1>I welcome you all to learn React</h1>
    </>
);


// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// finally using render method we are rendering the content
root.render(<GreetComponent/>);