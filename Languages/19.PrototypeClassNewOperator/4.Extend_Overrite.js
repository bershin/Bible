/*
    Move common function to a class
*/

class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating...`
    }
}

class Cat extends Pet{
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

const newKitty = new Cat("kitty", 8)
console.log(newKitty.eat()) // kitty is eating...
console.log(newKitty.meow()) // MEOOOOW
// Expand proto to find "bark" extend further most proto to get "eat"
const newPuppy = new Dog("puppy", 12)
console.log(newPuppy.eat()) // puppy is gobling..
console.log(newPuppy.bark()) // LOOOOL

const kitty = new Pet("kitty", 8)
console.log(kitty.eat()) // kitty is eating...

const puppy = new Pet("puppy", 12)
console.log(puppy.eat()) // puppy is eating...