import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

var arr = ["John", "Mike", "Hendry"]

root.render(
  <div>
    {arr.map((item)=><h1>{item}</h1>)}
  </div>
)