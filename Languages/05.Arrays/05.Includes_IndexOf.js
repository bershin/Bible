let fruits = ["mango", "grapes", "orange", "apple", "pine apple", "cherry"]

console.log(fruits.includes("apple")) // true
console.log(fruits.includes("mangoose")) // false
console.log(fruits.includes("pine")) // false
console.log(fruits.includes("apple", 4)) // false

if(fruits.includes("cherry")){
    console.log("Cherry is my favorite")
} // Cherry is my favorite


console.log(fruits.indexOf("apple")) // 3
console.log(fruits.indexOf("mangoose")) // -1
console.log(fruits.indexOf("pine")) // -1
console.log(fruits.indexOf("apple", 4)) // -1

if(fruits.indexOf("cherry") !== -1){
    console.log("Cherry is my favorite")
} // Cherry is my favorite