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

addAndHandle(2,3, (result, b)=>{
    console.log("Call back :", result)
})
/*
app.ts:15:19 - error TS2345: Argument of type '(result: any, b: any) => void' is not assignable to parameter of type '(res: number) => void'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.
*/