const form = document.getElementById("signup-form")
const fruitSelect = document.getElementById("fruit")
const termCheckbox = document.getElementById("term")
const creditCardInput = document.getElementById("cc")

formData = {}
// Input looks for changes
creditCardInput.addEventListener("input", e => {
    formData["cc"] = e.target.value
})

fruitSelect.addEventListener("input", e => {
    formData["fruit"] = e.target.value
})

termCheckbox.addEventListener("input", e => {
    // formData["term"] = e.target.value // Once "on" its always on.
    formData["term"] = e.target.checked
})