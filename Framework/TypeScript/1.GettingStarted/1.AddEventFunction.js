const num1 = document.getElementById('num1');  
const num2 = document.getElementById('num2');
const add = document.getElementById('add');

function addition(a, b){
    return a + b
}

add.addEventListener('click', function(){
    console.log(addition(num1.value,num2.value))
})