const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hello guys"),React.createElement("h1", {}, "How are you doing?")]
  )
);

// creating an h1 element using react createElement API
const greeting = React.createElement(
  "h1",
  {},
  "Hello developers , welcome all"
);
// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// finally using render method we are rendering the content
root.render(heading);
