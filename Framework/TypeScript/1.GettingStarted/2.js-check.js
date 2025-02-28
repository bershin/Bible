const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const add = document.getElementById('add');

function addition(a, b){
    if( typeof a === "number" && typeof b === "number"){
        return a + b
    }else{
        // return +a + +b
        return parseInt(a) + parseInt(b)
    }
}

add.addEventListener('click', function(){
    console.log(addition(num1.value,num2.value))
})