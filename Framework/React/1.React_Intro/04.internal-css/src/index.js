import React from 'react'
import ReactDOM from 'react-dom/client'

const myStyle = {
    color: "blue",
    backgroundColor:"red"
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1 style={myStyle}>Hello World</h1>)