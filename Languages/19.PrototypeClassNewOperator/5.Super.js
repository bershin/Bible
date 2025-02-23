/*
    Move common function to a class
*/

class Pet{
    constructor(name, age){
        console.log("In PET constructor..")
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating...`
    }
}

class Cat extends Pet{
    constructor(name, age, lifeLeft=9){
        console.log("In CAT constructor..")
        super(name, age)
        this.lifeLeft = lifeLeft
    }

    meow(){
        return "MEOOOOW"
    }
}

/* Function overritten */
class Dog extends Pet{
    bark(){
        return "LOOOOL"
    }
    eat(){
        return `${this.name} is gobling...`
    }
}

const monty = new Cat("monty", 8)
console.log(monty.eat()) // monty is eating...
console.log(monty.meow()) // MEOOOOW
