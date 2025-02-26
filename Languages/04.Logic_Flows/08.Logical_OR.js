console.log(1 != 1 && 10 === 10) // true
console.log(10/2 === 5 && null) // true
console.log(0 && undefined) // false

//===================================
let age = 30
if(age < 6){
    console.log("Go for free!")
}else if(age > 65){
    console.log("Go for free!")
}else{
    console.log("Pay $10")
}

//===================================
if(age < 6 || age > 65){
    console.log("Go for free!")
}else{
    console.log("Pay $10")
}

//===================================
let color = "red"
if(color === "red" || color === "blue" || color === "green"){
    console.log("great choice")
}