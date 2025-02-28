function add(a: number, b: number, printResult: Boolean, resultPhrase: string) {
    const result = a + b
    if(!printResult){
        return a + b;
    }
    console.log(resultPhrase + result)
}
const n1 = 6;
const n2 = 2.8;
const printResult = true
const resultPhrase = "Result is: "

add(n1, n2, printResult, resultPhrase);
