let veggie = ["brinjal", "carrot"]
let fruit = ["apple", "grapes"]
let meat = ["pork", "beef"]

console.log(veggie.concat(fruit)) // [ 'brinjal', 'carrot', 'apple', 'grapes' ]

let allfood = veggie.concat(meat,fruit) 
console.log(allfood)// [ 'brinjal', 'carrot', 'pork', 'beef', 'apple', 'grapes' ]

let mixed = veggie + fruit + meat
console.log(mixed) // brinjal,carrotapple,grapespork,beef