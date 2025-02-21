/*   Sequencial   */
// async function printPokemanSequencial(){
//     const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
//     const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
//     console.log(poke1.data.name)
//     console.log(poke2.data.name)
//     console.log(poke3.data.name)
// }

// printPokemanSequencial()

/*   Parallel   */
// async function printPokemanParallel(){
//     const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
//     const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data.name)
//     console.log(poke2.data.name)
//     console.log(poke3.data.name)
// }

// printPokemanParallel()


function changeBodyColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
} 

/* Sequence,
    teal in first 5s
    pink in next 1s, i.e, 6th second
    teal in next 3s, i.e 9th second
*/
// async function lightShowSequence(){
//     await changeBodyColor("teal", 5000)
//     await changeBodyColor("pink", 1000)
//     await changeBodyColor("blue", 3000)
// }

// lightShowSequence()

/* Parallel,
    pink in first 2s
    blue in next 6s, i.e 4th second
    teal in next 10s, i.e 3th second
    This works because await does not block the execution of other pending promises
    —it just waits for the first one it's called on.
*/
async function lightShowParallel(){
    const prom1 = changeBodyColor("teal", 9000)
    const prom2 = changeBodyColor("pink", 2000)
    const prom3 = changeBodyColor("blue", 6000)
    await prom1
    console.log("Executed first one")
    await prom2
    console.log("Executed second one")
    await prom3
    console.log("Executed third one")
}

lightShowParallel()


function squareNumber(num, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num*num)
        }, delay)
    })
} 

// On 12th second all results runs 
// async function calculate(){
//     const num1 = await squareNumber(3, 3000)
//     const num2 = await squareNumber(4, 4000)
//     const num3 = await squareNumber(5, 5000)
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// On 9th second all results runs 
async function calculate(){
    const pNum1 = squareNumber(3, 3000)
    const pNum2 = squareNumber(6, 6000)
    const pNum3 = squareNumber(9, 9000)
    const num1 = await pNum1
    const num2 = await pNum2
    const num3 = await pNum3
    console.log(num1)
    console.log(num2)
    console.log(num3)
}

/*  
    Prints as each completes but in sequence
    On 3rd 3, 5th second(next 2) 5, 7th second(next 2) 7 all results runs 
*/
// async function calculate(){
//     const pNum1 = squareNumber(3, 3000)
//     const pNum2 = squareNumber(5, 5000)
//     const pNum3 = squareNumber(7, 7000)
//     console.log(await pNum1)
//     console.log(await pNum2)
//     console.log(await pNum3)
// }

/*  
    Prints as each completes but in sequence
    On 5th second all results runs
*/
/* On 5th second all results runs */
// async function calculate(){
//     const pNum1 = squareNumber(5, 5000)
//     const pNum2 = squareNumber(4, 4000)
//     const pNum3 = squareNumber(3, 3000)
//     console.log(await pNum1)
//     console.log(await pNum2)
//     console.log(await pNum3)
// }


// calculate() // All run at once