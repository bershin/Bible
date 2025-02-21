/* 
    Promise.all assigns the value of all promise get resolved
    Since one promise fails, Promise.all() rejects immediately.
*/
/*   Parallel   */
// async function printPokemanParallel(){
//     const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
//     const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
//     const result = await Promise.all([prom1, prom2, prom3])
//     printResult(result)
// }

// function printResult(resArr){
//     for(let arr of resArr){
//         console.log(arr.data.name)
//     }
// }

// printPokemanParallel()


function squareNumber(num, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num*num)
        }, delay)
    })
} 

// Executes all at once after 9s
// async function calculate(){
//     const pNum1 = squareNumber(3, 3000)
//     const pNum2 = squareNumber(6, 6000)
//     const pNum3 = squareNumber(9, 9000)
//     const result = await Promise.all([pNum1, pNum2, pNum3])
//     for(let res of result){
//         console.log(res)
//     }
// }

// Executes all at once after 9s
// async function calculate(){
//     const results = await Promise.all([
//         squareNumber(9, 9000),
//         squareNumber(3, 3000),
//         squareNumber(6, 6000),
        
//     ])
//     console.log(results[0]) // 9
//     console.log(results[1]) // 36
//     console.log(results[2]) // 81
// }

// calculate()

/* background color changes at 2s, 6s, and 9s as expected. */
// async function lightShowParallel(){
//     await Promise.all([
//         changeBodyColor("teal", 9000),
//         changeBodyColor("pink", 2000),
//         changeBodyColor("blue", 6000)
//     ])
// }


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runParallel() {
//     await Promise.all([
//         delay(2000).then(() => console.log("Task 1 done")),
//         delay(4000).then(() => console.log("Task 2 done")),
//         delay(1000).then(() => console.log("Task 3 done"))
//     ]);
//     console.log("All tasks completed");
// }
// runParallel();

/*
    Task 3 done (at 1s)
    Task 1 done (at 2s)
    Task 2 done (at 4s)
    All tasks completed (at 4s)
*/


/* One fails the entire one fails */
// async function testPromiseAll() {
//     try {
//         await Promise.all([
//             Promise.resolve("Success 1"),
//             Promise.reject("Error Occurred"),
//             Promise.resolve("Success 2")
//         ]);
//     } catch (error) {
//         console.log("Caught Error:", error);
//     }
// }
// testPromiseAll();

async function testPromiseAll() {
    const results = await Promise.allSettled([
        Promise.resolve("Success 1"),
        Promise.reject("Error Occurred"),
        Promise.resolve("Success 2")
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Promise ${index + 1} succeeded:`, result.value);
        } else {
            console.log(`Promise ${index + 1} failed:`, result.reason);
        }
    });
}

// testPromiseAll();


/**** 
 * 
 * parallel execution with immediate results. 
 * Use .forEach() with .then()
 * or)
 * Execute inside the array itself
 * 
 * **/

async function calculate(){
    const promises = [
        squareNumber(9, 9000),
        squareNumber(3, 3000),
        squareNumber(6, 6000),
    ];

    /* 
    for await...of waits for each promise one at a time instead of running them in parallel.
    It’s useful for async iterators (like streams) but not for independent parallel tasks.
    */
    // for await (const result of promises) {
    //     console.log(result);
    // }
    /* The forEach() loop starts all promises in parallel. */
    promises.forEach(promise => {
        promise.then(result => console.log(result));
    });
}

calculate();

async function calculateSettle(){
    const promises = [
        squareNumber(9, 9000),
        squareNumber(3, 3000),
        squareNumber(6, 6000),
    ];

    Promise.allSettled(promises).then(results => {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log(result.value);
            } else {
                console.error("Error:", result.reason);
            }
        });
    });
}

calculateSettle();
