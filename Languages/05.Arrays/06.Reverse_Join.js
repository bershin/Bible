let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R']
console.log(letters.reverse())
// [
//     'R', 'E', 'S',
//     'P', 'E', 'C',
//     'T'
//   ]
console.log(letters)
// [
//     'R', 'E', 'S',
//     'P', 'E', 'C',
//     'T'
//   ]

console.log(["pig", 3, true].reverse()) // [ true, 3, 'pig' ]

console.log(letters.join()) // R,E,S,P,E,C,T
console.log(letters.join('')) // RESPECT
console.log(letters.join('.')) // R.E.S.P.E.C.T
console.log(letters.join('->#')) // R->#E->#S->#P->#E->#C->#T

console.log(['T', 'C', 'E', 'P', 'S', 'E', 'R'].reverse().join("-")) // R-E-S-P-E-C-T