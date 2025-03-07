// *************************************************
// ******************** LET ************************
let age = 20
console.log(age) // 20

let hens = 4
let roosters = 5
console.log(hens + roosters) // 9

console.log(hens - 1) // 3
console.log(hens) // 4

/* 
    Value changes only by assigning it back
*/
hens = hens -1
console.log(hens) // 3

/* 
    Cannot redeclare a varibale in same scope 
*/
// let hens = 4 // Error

// *************************************************
// ****************** CONST ************************
/* 
    Const variable are immutable
*/
const pi = 3.14
// pi = 4.15 // Error

const dayOfWeek = 7
// dayOfWeek = dayOfWeek + 1 // Error

// let dayOfWeek = 8 // Cannnot redeclare

/* 
    Const will be useful for array & Object
*/

// *************************************************
// ******************** VAR ************************
// Old way of declaring variables
// Things changes in scoping

var age1 = 20
console.log(age1) // 20

var hens1 = 4
var roosters1 = 5
console.log(hens1 + roosters1) // 9