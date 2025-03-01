function combine(inp1: number | string, inp2: number | string, convert: string) {
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
console.log(combine("raja", "rani", "as-text")); // rajarani
