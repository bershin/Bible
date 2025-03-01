type CombineType = number | string
type CombineConvert = "as-number" | "as-text"

function combine(inp1: CombineType, inp2: CombineType, convert: CombineConvert) {
    let result;
    if(typeof inp1 === "number" && typeof inp2 === "number" || convert === "as-number"){
        result = +inp1 + +inp2
    }else{
        result = inp1.toString() + inp2.toString()
    }
    return result
}

console.log(combine(10, 20, "as-number")); // 30
console.log(combine("10", "20", "as-text")); // 1020
// console.log(combine("10", "20", "as-boolean")); // error
/*
type_check.ts:13:33 - error TS2345: Argument of type '"as-boolean"' is not assignable to parameter of type '"as-number" | "as-text"'.
*/
console.log(combine("raja", "rani", "as-text")); // rajarani
