function hex(r,g,b){
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1)
}

console.log(hex(255, 100, 25)) // '#ff6419'


function rgb(r,g,b){
    return `rgb(${r},${g},${b})`
}

console.log(rgb(255, 100, 25)) // rgb(255,100,25)

/*
    Factory makes an object and returns it with property and function.
*/

function makeColor(r, g, b){
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    
    color.rgb = function(){
        // return `rgb(${r},${g},${b})` // Can also be written as below
        let {r,g,b} = this // "this" refer to the object left to it.
        return rgb(r,g,b)
    }

    color.hex = function(){
        let {r,g,b} = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }

    return color;
}

const firstColor = makeColor(255,100,25)
console.log(firstColor.hex()) // #ff6419
console.log(firstColor.rgb()) // rgb(255,100,25)
firstColor.g = 255
console.log(firstColor.hex()) // #ffff19

/*
    The issue with factory method is each object of color has their own copy of function
    Expand orange and see the functions, You will not find standard method in standard object like array and string.
*/
const orange = makeColor(255,100,25)
const yellow = makeColor(255,255,25)
console.log(orange.hex === yellow.hex) // false

console.log("hi".slice === "bye".slice) // true
console.log([1,2,3].sort === [3,4,5].sort) // true
