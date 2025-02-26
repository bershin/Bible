let num = 7
if(num === 7){
    console.log("lucky!")
}else{
    console.log("Bad!")
}

// =================
num === 7 ? console.log("lucky!") : console.log("Bad!")

// ================
let status = "offline"
let color
if(status === "online"){
    color = "green"
}else if(status === "offline"){
    color = "red"
}
color = status === "online" ? "green" : "red"