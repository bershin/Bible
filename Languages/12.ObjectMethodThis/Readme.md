## Shorthand Object Property
- If the key and value name is same, you can use any one in object literals.
    - In a function that returns object.
    - Task: Return max, min, sum, avg as object from an given array.
    - Task: Return a random card as object from an given array of suits & numbers.
- Introduced in ES6 not supported in I.E

## Computed Properties
- Dynamic keys is possible only by assignment before.
    - Task: Traditinal way of add dynamic key in object.(director, hero)
- You can have dynamic key by enclosing it in square bracket.
    - Task How to add dynamic key directly inside object. Also, Evaluate an calculation in dynamic key
- Task: Function which recieves obj, key value and return a new object vy adding key/value in it.

## Adding Methods/Functions to our objects.
- Adding function as property to our object is called methods.
    - We do this to "group functions together" and organization structure.
    - "Hello".toUpperCase() - This is a method, lives in string object.
    - Can be written shorter removing "function" and no key.
- Task:
    - Calculate object having add & sub method also "value" property.
    - auth obj having "username" property and login() and logout method.

## "This" keyword
- "This" is a reference to the current execution scope. Which will give an object back.
    - In a regular function "this" referes to the window in browser, if the function called directly.
    - Task: print "this" inside a function and call it.
- If the same function is as method in object, calling method will refer to the properties in that object.
- In an object, this referes to the object itself, not the window. This is important because it helps to refer the properties inside object by the method.
    - Task: enclose same function inside an object and call it.
    - Task: In the function(person) print the properties of the object.
    - Task: use variable name instead of "this.name"
- Method can call another method inside it using this keyword. The value of "this" depends on the "invocation context" the function it is used in.
    - Task: Call method inside a method using this.
- Arrow functions are not used as methods because inside arrow function "this" does not referes to properties inside it.
    - Task: - Another method as arrow function prints "this"
Note: In Browser: Variable declared using "var" are added to global scope. i.e. "Window". But not with "let" & "const"
    - var color = "red"; window.color
    - window.alert("HI")
    - In node it referes to the global object "Object [global] ".
## Arrow function doesn't get "this" but sometimes its helpful
- Arrow function get the this value if the this value is inside another function inside it.
- Task:
    - Method(pickName) returns random name from a name array property.
    - Add a start method with delay(set interval) and print some message.
    - Execute pickName inside set interval. Use "that" to resolve
    - Use arrow function to make it work that "that"

## Deck challange
- initializeDeck, drawOneCard, drawMultiCard, shuffleCard(fisher gates algorithm)
    - **Object are pass as reference in nodejs
    - ** Keeping deck as global value, will not allow us to create more than one deck.
- As function 
    - 🚫 Writing as function, you may need to pass the created deck each time. Which is  not look nice.
    - 🚫 You may also need to return values.
    - You may also need to have hold of values.
    - 🚫 Keeping deck as global value, will not allow us to create more than one deck.
- As Object
    - All relevent info are kept in one place.
    - Grouping values with functionality.(things with actions)
    - Not need to keep hold of any variables.(Every thing is stored inside object and methods act on object)
    - Its possible by "this" keyword.
    - ** Cannot create more than one deck
- Return object inside functions(makedeck)

