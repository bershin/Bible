//************** LOGICAl AND ******************/
console.log(1 <= 4 && 'a' === 'a') // true
console.log(9 > 10 && 9 >= 0) // false
console.log("abc".length === 3 && 1+1 === 4) // false

//===================================
let password = "I stg passwd" // Invalid password!
if(password >= 6 && password.indexOf(" ") === -1){
        console.log("Valid Password!")
}else{
    console.log("Invalid password!")
}

//===================================
let num = 3 // Within range
if(num >= 1 && num <= 3){
    console.log("Within range")
}else{
    console.log("Out of range")
}

//************** LOGICAl OR ******************/
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
//************** LOGICAl NOT ******************/
console.log(!null) // true
console.log(!(0 === 0)) // false
console.log(!(3 <= 4)) // false

//===================================
let userLoggedIn // Get out
if(!userLoggedIn){
    console.log("Get out")
}

//===================================
let flavor = "grapes"
if(flavor !== "grapes" && flavor !== "orange"){
    console.log("Do not have that flavor")
}

flavor = "watermelon" // "We only have grapes and orange"
if(!(flavor === "grapes" || flavor === "orange")){
    console.log("We only have grapes and orange")
}
//************** LOGICAl PRECEDENCE ******************/
let x = 7
console.log(x == 7 || x == 3 && x > 10) // true || false && false
// Answer -> true

// Precedence -> ====, !, &&, || 
console.log((x == 7 || x == 3) && x > 10) // false