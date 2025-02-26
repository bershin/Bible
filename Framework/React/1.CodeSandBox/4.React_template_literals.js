import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
var name = "John"
root.render(<h1>My name is {name}</h1>);