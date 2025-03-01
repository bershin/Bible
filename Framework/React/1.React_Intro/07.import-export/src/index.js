import React from "react"
import ReactDOM from "react-dom/client"
import fullName from "./data"
import {age} from "./data"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
    <h1>My name is {fullName}</h1>
    <h1>I am {age} years old</h1>
  </div>
)