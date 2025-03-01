function Parent(){
    var data = "shea"
    console.log("I am parent")
    Child(data)
}

function Child(value){
    console.log(`I am Child ${value}`)
}

Parent()