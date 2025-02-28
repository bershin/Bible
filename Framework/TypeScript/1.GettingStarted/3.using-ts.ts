const inp1 = document.getElementById('num1')! as HTMLInputElement;
const inp2 = document.getElementById('num2')! as HTMLInputElement;
const submitButton = document.getElementById('add')! as HTMLInputElement;

function sum(a: number, b: number){
    return a + b
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
submitButton.addEventListener('click', function(){
    console.log(sum(+inp1.value, +inp2.value))
})