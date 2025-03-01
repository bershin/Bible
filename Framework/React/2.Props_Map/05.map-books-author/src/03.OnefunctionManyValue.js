import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Card(props){
  return(
    <div style={{backgroundColor:"skyblue", padding:"10px", margin:"10px"}}>
      <h1>{props.myName}</h1>
      <h1>CSE</h1>
    </div>
  )
}

root.render(
  <div>
    <Card myName="Tyson"></Card>
    <Card myName="Henry"></Card>
    <Card myName="John"></Card>
  </div>
)