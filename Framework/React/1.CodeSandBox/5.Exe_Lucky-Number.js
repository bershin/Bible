import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
var name = "John";
var randNum = Math.floor(Math.random() * 10) + 1;
root.render(
  <div>
    <h1>Hey, My name is {name}</h1>
    <p>My lucky Number is {randNum}</p>
  </div>
);
