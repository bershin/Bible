import React from 'react'
import ReactDOM from 'react-dom/client'

function Navbar(){
    return (
        <div>
            <ul>
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="https://www.google.com">Product</a></li>
                <li><a href="https://www.google.com">Contact Us</a></li>
            </ul>
        </div>
    )

}

function About(){
    return(
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tenetur temporibus id doloribus consectetur quia accusamus tempore, minima perferendis aspernatur aliquam laudantium sint sequi facere? Accusantium unde autem mollitia deleniti?</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
        <Navbar></Navbar>
        <About></About>
    </div>
)