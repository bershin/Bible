var inp1 = document.getElementById('num1');
var inp2 = document.getElementById('num2');
var submitButton = document.getElementById('add');
function sum(a, b) {
    return a + b;
}
/*
submitButton.addEventListener('click', function(){
    console.log(sum(inp1.value, inp2.value))
})
*/
/*
tsc using-ts.ts
using-ts.ts:10:21 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

10     console.log(sum(inp1.value, inp2.value))
                       ~~~~~~~~~~


Found 1 error in using-ts.ts:10
*/
submitButton.addEventListener('click', function () {
    console.log(sum(+inp1.value, +inp2.value));
});