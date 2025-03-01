import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Parent(){
  var fName = "John"
  return(
    <div>
      <h1>I am Parent</h1>
      <Child name = {fName}></Child>
    </div>
  )
}

function Child(name){
  return(
    <div>
      <h2>I am Child</h2>
      <GrandChild name = {name.name}></GrandChild>
    </div>
  )
}

function GrandChild(name){
  return(
    <h3>I am grandchild of {name.name}</h3>
  )
}
root.render(
  <Parent></Parent>
)