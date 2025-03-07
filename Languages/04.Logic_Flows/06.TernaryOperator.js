/*
    Find luck or not based on number
*/

//*************** Using IF ELSE *****************

let num = 7
if(num === 7){
    console.log("lucky!")
}else{
    console.log("Bad!")
}

//*************** Using Ternary *****************

num === 7 ? console.log("lucky!") : console.log("Bad!")

/*
    Find status color based on "online" or "offline"
*/

let status = "offline"
let color
if(status === "online"){
    color = "green"
}else if(status === "offline"){
    color = "red"
}
color = status === "online" ? "green" : "red"