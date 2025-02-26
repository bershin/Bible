// Using Single are double quote
let name = "Bershin John"
let status = 'Marrried'

// Quote inside quote
let msg = 'He said "hahaha"'
msg = "He said 'hahaha'"

/* Cannot mix quote */
// let status = "Marrried' / Error
// msg = "He said "hahaha"" // Error

/* Escape character */
console.log('He ain\'t happy') // He ain't happy
console.log("He said \"he isn't happy\"") // He said "he isn't happy"

// String template literals
let cost = 20
console.log(`He said "he isn't happy"`) // He said "he isn't happy"
console.log(`I count ${3+4} sheeps`) // I count 7 sheeps
console.log(`${name.toUpperCase()} owe me $${cost-5}`) // BERSHIN JOHN owe me $15

// Concat string
let firstName = "John"
let lastName = 'Berchin'
let fullName = firstName + " " + lastName
console.log(fullName) // John Berchin

let age = "5" + "4"
console.log(age) // 54 instead of 9

// String with numbers
console.log("hi" + 1) // hi1
console.log("hi" - "h") // NaN
console.log("hi" / "h") // NaN
console.log("Hello\nWorld")
// Hello
// World

