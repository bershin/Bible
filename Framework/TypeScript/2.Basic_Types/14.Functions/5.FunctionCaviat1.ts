function add(n1: number, n2: number):number {
    return n1 + n2
}

function printResult(result: number):undefined{
    console.log("Result is: ", result)
    return
}

printResult(add(2, 3)) // Result is:  5

let combined: Function;
combined = add
console.log(combined(5,6)) // 11

combined = printResult
console.log(combined(5,6)) // Result is:  5
// undefined