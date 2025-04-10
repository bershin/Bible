let fruits = ["mango", "grapes", "orange", "apple", "pine apple", "cherry"]

// Insert 
console.log(fruits.splice(1, 0, "banana")) // []
console.log(fruits)
// [
//     'mango',
//     'banana',
//     'grapes',
//     'orange',
//     'apple',
//     'pine apple',
//     'cherry'
//   ]

// Insert multiple values
console.log(fruits.splice(2, 0, "pomo","berry")) // []
console.log(fruits) 
// [
//     'mango',
//     'banana',
//     'pomo',
//     'berry',
//     'grapes',
//     'pine apple',
//     'cherry'
//   ]

// Replace one with multiple values
console.log(fruits.splice(1, 1, "carrot","tomato")) // [ 'banana' ]
console.log(fruits) 
// [
//     'mango',
//     'carrot',
//     'tomato',
//     'pomo',
//     'berry',
//     'grapes',
//     'pine apple',
//     'cherry'
//   ]

// Delete 2 item from index 3
console.log(fruits.splice(3, 2)) // [ 'orange', 'apple' ]
console.log(fruits) // [ 'mango', 'banana', 'grapes', 'pine apple', 'cherry' ]
