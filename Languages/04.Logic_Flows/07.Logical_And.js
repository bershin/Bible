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
