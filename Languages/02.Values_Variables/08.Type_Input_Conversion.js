console.log(typeof 23) // number
console.log(typeof true) // boolean
console.log(typeof "99 cents") // string
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof NaN) // number
console.log(typeof Infinity) // number

// Input
let num = prompt("Enter your number")
console.log(typeof num) // string

// String to number
console.log(parseInt('24')) // 24
console.log(parseInt('24')+1) // 25
console.log(parseInt('24.987')) // 24
console.log(parseInt('24cents')) // 24

console.log(parseFloat('24.987')) // 24.987
console.log(parseFloat('7')) // 7 
console.log(parseFloat('i ate 3 shrimp')) // NaN

// The unary plus (+) operator in JavaScript is a shorthand way to convert a value into a number.
console.log(+"5");   // 5 (string "5" becomes number 5)
console.log(+"10.5"); // 10.5 (string "10.5" becomes number 10.5)
console.log(+true);  // 1 (true becomes 1)
console.log(+false); // 0 (false becomes 0)
console.log(+null);  // 0 (null becomes 0)
console.log(+"abc"); // NaN (invalid number)