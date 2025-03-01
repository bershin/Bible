import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

var nameArray = ["Tyson", "Henry", "John"]
var deptArray = ["Mech", "CSE", "ECE"]
function Card(props){
  return(
    <div style={{backgroundColor:"skyblue", padding:"10px", margin:"10px"}}>
      <h1>{props.myName}</h1>
      <h1>{props.dept}</h1>
    </div>
  )
}

root.render(
  <div>
    {nameArray.map((name,index)=><Card myName={name} dept={deptArray[index]}></Card>)
    }
  </div>
)