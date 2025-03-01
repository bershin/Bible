var userInput;
var useName;
userInput = 5;
console.log(userInput);
userInput = "John";
console.log(userInput);
if (typeof userInput === 'string') {
    useName = userInput;
}
function generateError(error, code) {
    throw ({ errorMessage: error, errorCode: code });
}
var result = generateError("Network Error!", 500);
console.log(result);
