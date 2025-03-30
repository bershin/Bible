/* Method with out arguments */

// Change case - Original is unchanged
let fullName = "Bershin John"
console.log(fullName.toLowerCase()) // bershin john
console.log(fullName.toUpperCase()) // BERSHIN JOHN

// Remove leading & trialing spaces
const greeting = "   Hello All   "
console.log(greeting.trim()) // Hello All

/* Chaining */
console.log("  BershinJohn@Gmail.com ".trim().toLowerCase()) // bershin@gmail.com

/* Method with arguments */
// indexOf
let tvShow = 'baseball'
console.log(tvShow.indexOf("base")) // 0
console.log('baseball'.indexOf("ball")) // 4
console.log('baseball'.indexOf("a")) // 1
console.log('baseball'.indexOf("z")) // -1

// Slice
console.log('$50.49'.slice(1)) // 50.49
console.log('SuperHero'.slice(5)) // Hero
console.log('SuperHero'.slice(-5)) // rHero
console.log('SuperHero'.slice(40)) // ""
console.log('SuperHero'.slice(0,5)) // Super
console.log('SuperHero'.slice(5,7)) // He
console.log('SuperHero'.slice(-7,-3)) // perH

// Replace
console.log("He laughed hahaha".replace("hahaha","hehehe")) // "He laughed hehehe"
console.log("He laughed hahaha".replace("ha","he")) // "He laughed hehaha"
console.log("He laughed hahaha".replace("hoo","he")) // He laughed hahaha

/* Chaining methods with arguments */
console.log("GARBAGE".slice(2).replace("B",'')) // RAGE
