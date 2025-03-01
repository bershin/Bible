import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

var myName = "John"

var evenNum = [1,2,3,4,5,6].map(num=>num%2?"even":"odd")

function say(){
  return("Hello")
}

function luckyNumber(){
  const randNum = Math.floor(Math.random() * 10) + 1
  if(randNum < 5){
    return "badluck"
  }else{
    return "goodluck"
  }
}

root.render(
  <div>
    {myName}
    <h1>{myName}</h1>
    <h2>{1+2}</h2>
    <h3>{say()}</h3>
    {/* <h4>{if(true){return "hi"}}</h4> */}
    <h4>{luckyNumber()}</h4>
    <h5>{evenNum}</h5>
  </div>
)