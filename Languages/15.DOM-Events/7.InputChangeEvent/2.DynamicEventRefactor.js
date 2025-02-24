const form = document.getElementById("signup-form")
const fruitSelect = document.getElementById("fruit")
const termCheckbox = document.getElementById("term")
const creditCardInput = document.getElementById("cc")

formData = {}

// for(let element of [creditCardInput, fruitSelect, termCheckbox]){
//     element.addEventListener("input", e => {
//         formData[e.target.name] = e.target.value
//          console.log(formData)
//     })
// }

// for(let element of [creditCardInput, fruitSelect, termCheckbox]){
//     element.addEventListener("input", e => {
//         // console.log(e) // Check type in target
//         formData[e.target.name] = e.target.type === "checkbox"?e.target.checked:e.target.value
//          console.log(formData)
//     })
// }

for(let element of [creditCardInput, fruitSelect, termCheckbox]){
    element.addEventListener("input", (e) => {
        const {name, type, checked, value} = e.target;
        formData[name] = type === "checkbox"?checked:value;
        console.log(formData)
    })
}

