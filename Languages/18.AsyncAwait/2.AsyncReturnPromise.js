function greet(){
    return "You are welcome!"
}
console.log(greet()) // "You are welcome!"

async function greet1(){
    return "You are welcome!"
}
console.log(greet1()) // Promise {<fulfilled>: 'You are welcome!'}

async function greet2(name){
    return `${name} You are welcome`
}

greet2("John")
.then(name=>{
    console.log(name)
})

async function greet3(){
    return `You are welcome`
}

greet3()
.then(val=>{
    console.log(`John ${val}`)
})

function add(x,y){
    return x + y
}
console.log(add(2,3)) // 5

function add1(x,y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw new error("Not a number")
    }
    return x + y;
}
console.log(add1('e',3)) // Uncaught ReferenceError: error is not defined

function add2(x,y){
    return new Promise((resolve, reject)=>{
        if( typeof x !== 'number' || typeof y !== 'number'){
            reject("x & y must be a number")
        }
        resolve(x + y)
    })
}
add2(2,'e').then(val=>{
    console.log(val)
}).catch(err=>{
    console.error("Not a number:", err)
}) 

async function add3(x,y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw new error("x & y must be a number")
    }
    return x + y;
}
add3('e',3).then(res =>{
    console.log(res)
}).catch(err=>
    console.error("Not a number", err)
)