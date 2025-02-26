let fruits = ["mango", "grapes", "orange", "apple", "pine apple", "cherry"]

console.log(fruits.sort()) // [ 'apple', 'cherry', 'grapes', 'mango', 'orange', 'pine apple' ]
console.log(fruits) // [ 'apple', 'cherry', 'grapes', 'mango', 'orange', 'pine apple' ]

let lotto = [1,23,11,2,3,33,5,66]
console.log(lotto.sort())
// [
//     1, 11, 2, 23,
//     3, 33, 5, 66
//   ]

let sortLotto = [1,23,11,2,3,33,5,66].sort((a,b)=>a-b)
console.log(sortLotto)
// [
//     1,  2,  3,  5,
//    11, 23, 33, 66
//  ]