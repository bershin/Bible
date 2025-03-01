import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Person = [
  {
    name: "Tyson",
    dept: "Mech"
  },
  {
    name: "Henry",
    dept: "CSE"
  },
  {
    name: "John",
    dept: "ECE"
  }
]

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
    {
      Person.map((item)=><Card myName={item.name} dept={item.dept}></Card>)
    }
  </div>
)