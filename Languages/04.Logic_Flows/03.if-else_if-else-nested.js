//********************** IF ******************/
if( 1 === 1){
    console.log("It's true") // It's true
}

/* with out braces */
let rating=3
if(rating > 2) console.log("You get 10% hike!") // You get 10% hike!

/* Expresion with comparison */
let num = 33
if(num % 2 !== 0){
    console.log("Odd number") // Odd number
}


//********************** ELSE IF ******************/
// With OUT Else-IF
// ==============================

if(rating === 1){
    console.log("You get no hike!")
}
if(rating === 2){
    console.log("You get 5% hike!")
}
if(rating === 3){
    console.log("You get 10% hike!") // You get 10% hike!
}
// With Else-IF
// ==============================
if(rating === 1){
    console.log("You get no hike!")
}else if(rating === 2){
    console.log("You get 5% hike!")
}else if(rating === 3){
    console.log("You get 10% hike!")
}
// You get 10% hike!

//********************** ELSE ******************/
let rate = 'a'
if(rate === 1){
    console.log("You get no hike!")
}else if(rate === 2){
    console.log("You get 5% hike!")
}else if(rate === 3){
    console.log("You get 10% hike!")
}else{
    console.log("Invalid input")
}

//  Yes or NO
// ======================
let highScore = 95

if(myScore > highScore){
    highScore = myScore
    Console.log(`New highscore is ${highScore}`)
}else{
    console.log(`Game over: Your score ${myScore}`)
}

//********************** NESTED ******************/

let password

if(password >= 6){
    // Check space
    if(password.indexOf(" ") === -1){
        console.log("Valid Password!")
    }else{
        console.log("Longer password but have spaces!")
    }
}else{
    console.log("Password must be longer!")
}