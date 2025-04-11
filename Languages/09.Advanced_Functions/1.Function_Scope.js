// Define a function with different type of variable in it. 
// Can we access any of those variable outside the function in any means?
// like directly printing the value of the variable outside function.
// or execute the function and directly printing the value of the variable outside function.

function lol(){
    let person = "John"
    const age = 47
    var status ="single"
    console.log(age) // 47
}
// console.log(age) // ReferenceError

function color(){
    let name = "Purple"
    const age = 12
    var status ="dark"
    console.log(age) // 12
}

lol()
color() // Even after executing the function, the variable is not accessible
// console.log(age) // ReferenceError

// Gobal scope - Define a variable with out var,let,const is global scope
function magic(){
    let name = "Purple"
    age = 12
    var status ="dark"
    console.log(age) // 12
}
magic()
console.log(age) // 12
// Whats the use of the scope?
// But this allows same variable name to be given in different function.
// Also define same variable inside and outside the function. Variable declared outside function can be redeclared inside function
// They can also be accessed in their scope
let bird = "parrot"
function birdWatch(){
    let bird = "penguin"
    console.log(bird) // penguin
}
birdWatch()
console.log(bird) // parrot