## Core types - All types are lowercase
Types allow you to detect errors early and avoid some runtime errors.
TS types are checked during compilation, JS types during runtime.
- numbers
    - Eg) 1, 5.3, -10 
    - No difference between integer and floats.
    - All numbers are float by default. Eg) 5 -> 5.0
- String 
    - 'Hi', "Hi", `Hi`
    - All text values
- Boolean
    - true, false
    - No truthy or falsy value(0, null, false, "" means false)
- Arrays
    - [1,2,3]
    - Any JS object, more specific types are possible.
- Object
    - { a: 30 }
    - Any JS array, type can be flexible and strict.
- Tuples
    - [2, "author]
    - fixed length array
    - ✅ Push is an exception allowed in tuples
    - ❌ Assigning value by index is not allowed.
- Enum
    - enum{ NEW, OLD }
    - Automatically enumerated global constant identifier.
    - Global constants you want to represent as numbers for which you want to assign a human readable label.
    - Enum is a custom type starts with uppercase letter.
- Any
    - "*"
    - Any kind of value, no specific type assignment.
    - Eg) any, any[]
- Union
    - Use | to allow more than one type
- Literal
    - In union can allow more than one literal.
- Alias
    - Can use any name which are not reserved.
    - Used with union to make it shorter
- unknown
    - Can assign any literals, but assigning variables with type need type checking.
    - Better than Any

### Function
- Function types defines the parameters and return types of a function.
- Use void instead of undefined.
    - Void doesn't force you to return anything if you don't want to return something.

### Type inference
- ❌ Avoid providing type during assigment `const n1: number = 50`. Allow JS to use type inference like `const n1 = 50`, where n1 is 50, changing const to let/var makes it to "number" instead of 50.
- Avoid infering function return type as much as possible
-  ✅ Instead use it in declaration `let n1: number` ; `n1 = 50`. To catch error in compilation.