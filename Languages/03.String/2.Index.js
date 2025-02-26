let fullName = "Bershin John"

console.log("  .    ".length)
console.log("Bershin John".length)
console.log(fullName.length)

console.log(fullName[0]) // "B"
console.log(fullName[fullName.length]) // undefined
console.log(fullName[fullName.length-1]) // "n"
console.log(fullName[3]) // "s"

console.log("Pecan pie"[7])// i

// String is immutable
fullName[3] = 'c'
console.log(fullName) // "Bershin John"