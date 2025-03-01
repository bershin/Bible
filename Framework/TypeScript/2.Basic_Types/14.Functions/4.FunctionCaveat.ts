function add(n1: number, n2: number):number {
    return n1 + n2
}

function printResult(result: number):undefined{
    console.log("Result is: ", result)
    return
}

printResult(add(2, 3))

let combined;
combined = add
console.log(combined(5,6)) // 11

combined = 5
console.log(combined(5,6)) // Combine successfullu shows error in runtime