function add(n1: number, n2: number):number {
    return n1 + n2
}

function printResult(result: number):undefined{
    console.log("Result is: ", result)
    return
}

function addAndHandle(a: number, b: number, cb: (res:number)=>void){
    const result = a + b;
    cb(result)
}

addAndHandle(2,3, (result)=>{
    console.log("Call back :", result)
})