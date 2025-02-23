/*
    "class" keyword is manditatry and is in Capital
    "constructor" keyword is manditory. 
    "new" keyword calls "constructor function" by default
*/
class Color{
    constructor(r, g, b){
        console.log("Inside Constructor")
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
}

const orange = new Color(255, 168, 25, "kaavi")

/*
    Add method inside class
    Note: Add function inside class object, without "function" keyword.
*/

class Color1{
    constructor(r, g, b){
        console.log("Inside Constructor")
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }

    innerRGB(){
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }

    hex(){
        const { r, g, b } = this; 
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
    }
    rgba(a=1){
        // const { r, g, b } = this; 
        return `rgba(${this.innerRGB()}, ${a})`
    }
}

const yellow = new Color1(255, 255, 25, "sunlight")
console.log(yellow.rgb()) // rgb(255, 255, 25)
console.log(yellow.rgba(0.5)) // rgb(255, 255, 25, 0.5)

const red = new Color1(255, 67, 89, "blood")
console.log(red.hex()) // #ffffff

console.log(yellow.hex === red.hex) // true

document.querySelector("body").style.backgroundColor = red.rgba(0.4)