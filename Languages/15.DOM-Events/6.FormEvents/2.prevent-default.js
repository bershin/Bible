const form = document.getElementById("signup-form")
const fruitSelect = document.getElementById("fruit")
const termCheckbox = document.getElementById("term")
const creditCardInput = document.getElementById("cc")

form.addEventListener("submit",function(e){
    alert("You clicked!!!")
    e.preventDefault()
    console.log("cc:",creditCardInput.value) // cc: 234
    console.log("fruit:",fruitSelect.value) // fruit: apple
    console.log("term:",termCheckbox.value) // term: on
    console.log("term:",termCheckbox.checked) // term: false
})