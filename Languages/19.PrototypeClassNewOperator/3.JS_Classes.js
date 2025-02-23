/*
    "class" keyword is manditatry and is in "Capital"
    "constructor" keyword is manditory. 
    "new" keyword calls "constructor function" by default
*/
class Color{
    constructor(r, g, b, name){
        console.log("Inside Constructor")
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
}

const orange = new Color(255, 168, 25, "kaavi")
// > orange // See above object and constructor with class Color

/*
    Add method inside class
    Note: Add function inside class object, without "function" keyword.
*/

class Color1{
    constructor(r, g, b, name){
        console.log("Inside Constructor")
        this.r = r
        this.g = g
        this.b = b
        this.name = name
        this.calcHSL()
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
    hsl(){
        const {h,s,l} = this
        return `hsl(${h},${s}%,${l}%)`
    }
    opposite(){
        const {h,s,l} = this
        const newhsl = (h+180) % 360
        return `hsl(${newhsl},${s}%,${l}%)`
    }
    fullSaturated(){
        const {h,l} = this
        return `hsl(${h},100%,${l}%)`     
    }
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const yellow = new Color1(255, 255, 25, "sunlight")
console.log(yellow.rgb()) // rgb(255, 255, 25)
console.log(yellow.rgba(0.5)) // rgb(255, 255, 25, 0.5)

const red = new Color1(255, 67, 89, "blood")
console.log(red.hex()) // #ffffff

/* Both methods refer same */
console.log(yellow.hex === red.hex) // true

/* Change body color using rgba */
document.querySelector("body").style.backgroundColor = red.rgba(0.4)

/* Change body color using hsl */
const newColor = new Color1(255,35,25,"red")
document.body.style.backgroundColor = newColor.hsl() // Change red
document.body.style.backgroundColor = newColor.opposite() // Change sky blue
document.body.style.backgroundColor = newColor.fullSaturated()

/*
    Two classes having common function.
*/

class Cat{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating...`
    }
    meow(){
        return "MEOOOOW"
    }
}

class Dog{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating...`
    }
    bark(){
        return "LOOOOL"
    }
}

const kitty = new Cat("kitty", 8)
console.log(kitty.eat()) // // kitty is eating...

const puppy = new Dog("puppy", 12)
console.log(puppy.eat()) // // puppy is eating...