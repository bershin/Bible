/*
    "this" inside function returns window(nearest object) because the function is called by window. 
*/
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    console.log(this)
}

Car("Tesla", "Yola", 2015) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/*
    1 Test: When use "new" operator to call function
    Result: "this" inside function returns object. 
    Note: A constructor function is also created inside "prototype"
*/

new Car("Tesla", "Yola", 2015) // Car {make: 'Tesla', model: 'Yola', year: 2015}

/*
    2 Test: Adding functions inside function
    Result: Expand object to see the rgb function, directly in object, This is not expected.
*/

function Car1(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.drive = function(){
        const { make, model, year } = this
        return `Driving ${make} model ${model} year ${year}`
    }
    console.log(this)
}

new Car1("Tesla", "Yola", 2015) 

/*
    3 Test: Adding the function inside prototype, outside the object(Because "prototype" is created obly after new operator.)
    Result: Expected result, rgb() function is inside the prototype object. So each new object refers it.
    Note: Don't call as Car2.rgb() it will yield to error
*/

function Car2(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(this);
}

Car2.prototype.drive = function(){
    const { make, model, year } = this
    return `Driving ${make} model ${model} year ${year}`
}

const tesla = new Car2("Tesla", "Yola", 2015) //
console.log(tesla.drive()) // Driving Tesla model Yola year 2015
const maruthi = new Car2("Maruthi", "Alto", 2009) //
console.log(maruthi.drive()) // Driving Maruthi model Alto year 2009

console.log(tesla.drive === maruthi.drive) // true

/*
    4 Test: Add more function and test it in document
    Result: Color changes.
    Note:
*/

function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Color.prototype.rgb = function(){
    const { r, g, b } = this; // Here this is the calling object left to it.
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function(){
    const { r, g, b } = this; 
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
}
Color.prototype.rgba = function(a=1){
    const { r, g, b } = this; 
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const orange = new Color(255, 168, 25)
console.log(orange.rgb())
console.log(orange.hex())
console.log(orange.rgba(0.6))

const body = document.querySelector("body")
body.style.backgroundColor = orange.rgb()

/*
    Conclusion: Using "new" operator 
     - No object is creation and return after adding key/value.
     - the functions are now referenced instead of copy, 

    Downside: The functions are not grouped together.
*/