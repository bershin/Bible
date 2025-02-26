let rating = 'a'
if(rating === 1){
    console.log("You get no hike!")
}else if(rating === 2){
    console.log("You get 5% hike!")
}else if(rating === 3){
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