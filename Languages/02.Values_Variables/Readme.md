## Primitive types
### JavaScript
- Numbers - (Positive, negative, whole(integer) & decimal(float))
- String - anything in Single or double quote( Don't mix)
- Boolean - (true/false) NOT "true" or False
- Null - Intentianal absence of any value.(Must be assigned)
- Undefined - Variables that do not have assigned values.

- NaN -> NaN is a number that represent, NOT a number
    - Zero divide by anynumbers (or) NaN itself
- Infinity / -Infinity
    - Anynumber divide by zero.

### Python
- "int" - Positive, negative, whole(integers)
- "float" -> Positive, negative, decimals(float))
- "str" - Strings, anything in Single or double quote( Don't mix)
- "bool" - (true/false) NOT "true" or False

## Variables
### JavaScript

#### Variable declarartion
Variables are declared using
- let - Latest and common way of declaring
- const -> immutable after declaring
- var -> Old way of doing(differs in scope)
#### Variable Name
- Cannot use predefined variables (let, document)
- Naming using camel Case (numOfHens)
- Cannot redeclare a variable in same scope
#### Variables can change type
let age = 12
const firstname = "John"
var married = true
age = "twelve"


### Python
firstname = "John"
age = 12
height = 5.06
married = True


## Operator:
### JavaScript
+ , -, *, /, **

## Precedence
BODMAS

## Unary operater.
- Variable can do arithemetic opeartion and assign it back without explicit assignment
    - Works in addition/substraction & only for incrementing/decrement one at a time.
    - instead of `sum = sum + 1` can use `sum++`
- For others use compination of operator & assignmnet
    - instead of sum `avg = avg / 4` use `avg/=4`
- The unary plus (+) operator in JavaScript is a shorthand way to convert a value into a number.

## Predefined Math function
- Math.PI / Math.abs/pow
- Math.random
    - returns random decimal between 0 to 1 (0.000000 to 0.999999)
- See all methods, In console type below and Enter.
    - > Math
### Find type of a value/variable
- typeof
Note: null is an object.

### Convert between types
- parseInt / parseFloat
- The unary plus (+) operator in JavaScript is a shorthand way to convert a value into a number.
