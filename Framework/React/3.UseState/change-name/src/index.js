import React from "react"
import {useState} from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

function ChangeState(){
  var [name, setState] = useState("Mike")

  function changeme(){
    setState("John")
  }

  return(
    <div>
      <h1>{name}</h1>
      <button onClick={changeme}>Change</button>
    </div>
  )
}

root.render(
  <div>
    <ChangeState></ChangeState>
  </div>
)