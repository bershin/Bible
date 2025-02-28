function add(a, b) {
    if(typeof a !== 'number' || typeof b !== "number"){
        throw new Error("Invalid type!!");
    }
    return a + b;
}
var num1 = "6";
var num2 = 2.8;
var result = add(num1, num2);
console.log(result);
