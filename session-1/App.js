 // creating an h1 element using react createElement API
 const greeting = React.createElement("h1",{},"Hello developers , welcome all");
 // creating root using createRoot API where the data need to be rendered 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // finally using render method we are rendering the content
 root.render(greeting);