let a = 2
let b = a
console.log(a) // 2
console.log(b) // 2
a = 3
console.log(a) // 3
console.log(b) // 2

let str1 = "two"
let str2 = str1
console.log(str1) // two
console.log(str2) // two
str1 = "three"
console.log(str1) // three
console.log(str2) // two

let arr1 = [1,2,3,4]
let arr2 = arr1
console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3, 4 ]
arr1[2] = 10
console.log(arr1) // [ 1, 2, 10, 4 ]
console.log(arr2) // [ 1, 2, 10, 4 ]

// -------------------------------------

const color = ["red", "blue", "green"]
color[1] = "brown"
console.log(color) // [ 'red', 'brown', 'green' ]
color.pop()
console.log(color) // [ 'red', 'brown' ]

// color = ["grey", "black"] // TypeError: Assignment to constant variable.