let day = 3

if(day === 0){
    console.log("Sunday")
}else if(day === 1){
    console.log("Monday")
}else if(day === 2){
    console.log("tuesday")
}else if(day === 3){
    console.log("Wednesday")
}else if(day === 4){
    console.log("Thursday")
}else if(day === 5){
    console.log("friday")
}else if(day === 6){
    console.log("Saturday")
}else{
    console.log("Invalid day")
}

switch (day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
}

// ==============
let emoji = "sad face"
switch(emoji){
    case 'happy face':
    case 'sad face':
        console.log('yellow')
    case 'egg plant':
        console.log('purple')
    case 'heart':
    case 'lips':
        console.log('red')
}