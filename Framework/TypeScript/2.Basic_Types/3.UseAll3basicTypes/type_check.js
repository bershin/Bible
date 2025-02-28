function add(a, b, printResult, resultPhrase) {
    var result = a + b;
    if (!printResult) {
        return a + b;
    }
    console.log(resultPhrase + result);
}
var n1 = 6;
var n2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(n1, n2, printResult, resultPhrase);
