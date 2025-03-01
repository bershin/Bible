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

generateError("Network Error!", 500) // Uncaught {errorMessage: 'Network Error!', errorCode: 500}