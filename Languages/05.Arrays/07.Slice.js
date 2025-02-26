let fruits = ["mango", "grapes", "orange", "apple", "pine apple", "cherry"]

console.log(fruits.slice(5)) // [ 'cherry' ]
console.log(fruits.slice(-5)) // [ 'grapes', 'orange', 'apple', 'pine apple', 'cherry' ]
console.log(fruits.slice(40)) // []
console.log(fruits.slice(0,5)) // [ 'mango', 'grapes', 'orange', 'apple', 'pine apple' ]
console.log(fruits.slice(5,7)) // [ 'cherry' ]
console.log(fruits.slice(-7,-3)) // [ 'mango', 'grapes', 'orange' ]

// Copy an array
let newFruit = fruits.slice()
console.log(newFruit) // [ 'mango', 'grapes', 'orange', 'apple', 'pine apple', 'cherry' ]