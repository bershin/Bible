let userInput: unknown
let useName: string

userInput = 5;
console.log(userInput)
userInput = "John"
console.log(userInput)

if(typeof userInput === 'string'){
    useName = userInput
}

function generateError(error: string, code: number){
    throw({errorMessage: error, errorCode: code})
}

const result = generateError("Network Error!", 500)
console.log(result) // returns nothing