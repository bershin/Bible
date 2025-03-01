function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log("Result is: ", result);
    return;
}
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndHandle(2, 3, function (result) {
    console.log("Call back :", result);
    return;
});
/*
app.ts:15:19 - error TS2345: Argument of type '(result: any, b: any) => void' is not assignable to parameter of type '(res: number) => void'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.
*/ 
