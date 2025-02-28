let score = 0
score+=10
console.log(score) // 10
score+=1
console.log(score) // 11

score++
console.log(score) // 12

score-=100
console.log(score) // -88
score--
console.log(score) // -89

score*=2
console.log(score) // -178

score/=3
console.log(score) // -59.333333333333336

score/=5
console.log(score) // -11.866666666666667

// The unary plus (+) operator in JavaScript is a shorthand way to convert a value into a number.
console.log(+"5");   // 5 (string "5" becomes number 5)
console.log(+"10.5"); // 10.5 (string "10.5" becomes number 10.5)
console.log(+true);  // 1 (true becomes 1)
console.log(+false); // 0 (false becomes 0)
console.log(+null);  // 0 (null becomes 0)
console.log(+"abc"); // NaN (invalid number)