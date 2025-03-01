import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Nameone(){
  return(
    <div style={{backgroundColor:"skyblue", padding:"10px", margin:"10px"}}>
      <h1>John</h1>
      <h1>Mech</h1>
    </div>
  )
}

function Nametwo(){
  return(
    <div style={{backgroundColor:"skyblue", padding:"10px", margin:"10px"}}>
      <h1>Henry</h1>
      <h1>ECE</h1>
    </div>
  )
}

function Namethree(){
  return(
    <div style={{backgroundColor:"skyblue", padding:"10px", margin:"10px"}}>
      <h1>Tyson</h1>
      <h1>CSE</h1>
    </div>
  )
}

root.render(
  <div>
    <Nameone></Nameone>
    <Nametwo></Nametwo>
    <Namethree></Namethree>
  </div>
)