const form = document.getElementById("signup-form")
const fruitSelect = document.getElementById("fruit")
const termCheckbox = document.getElementById("term")
const creditCardInput = document.getElementById("cc")

/*
    In "text input" event captured when focused outside
*/
formData = {}
for(let element of [creditCardInput, fruitSelect, termCheckbox]){
    element.addEventListener("change", (e) => {
        const {name, type, checked, value} = e.target;
        formData[name] = type === "checkbox"?checked:value;
        console.log(formData)
    })
}

