let color = ["red", "orange", "blue", "green"]

console.log(["red", "orange", "blue", "green"].length)
console.log(color.length)

console.log(color[0]) // "red"
console.log(color[color.length]) // undefined
console.log(color[color.length-1]) // "green"
console.log(color[3]) // "blue"

// Array is mutable
color[0] = 'brown'
console.log(color) // ["brown", "orange", "blue", "green"]
color[color.length] = "purple"
console.log(color) // ["brown", "orange", "blue", "green", "purple"]