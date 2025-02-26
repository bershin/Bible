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