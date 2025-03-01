let userInput: unknown
let useName: string

userInput = 5;
console.log(userInput)
userInput = "John"
console.log(userInput)

useName = userInput
/*
app.ts:9:1 - error TS2322: Type 'unknown' is not assignable to type 'string'.

9 useName = userInput
*/