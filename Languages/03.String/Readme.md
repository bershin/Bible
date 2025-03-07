######################## String are immutable. ##################
### String Representation
String is anything in Single or double quote with consistent 
- ( Don't mix)

### String escape character
- \n, \', \", \t, \\

### String Template literals
Strings that allow embedded expressions. - back ticks(``). Interpolating data inside string.
- Can used as escape
- Can use expression inside `${}` -> which turns into a string.

### String concat
String concat with (+) operator.
- (+) works between strings and also between strings & numbers.

### String Index
String are indexed as arrays starting from 0 to length -1
- Out of bound index represent "undefined".

### String Property
Key attached to the string
- string.length -> to find the length (number of character in string) eg) "hello".length

### String Methods
Methods are actions that can be performed on a particular string.
- Needs a parntheses. Eg) Format "string.method()"
    - Change case in string
        - Change case upper or lower
    - Trim spaces
        - Remove leading & trialing spaces
        - Will not remove space in middle.
    - Chaining
        - Chain multiple methods for a string.
- Needs a parntheses with argument. Eg) Format "string.method(arg)"
    - indexOf(one arg)
        - Matches the arg with the string and return the starting index matched.
        - If more than one match the first matched index is returned
        - If no match "-1" is returned.
    - slice(one or two arg) - optional
        - one arg -> from that index to end.
        - index out of bound return "" empty string.
        - Two args -> starting index to before the end index.
    - replace(two args)
        - Replace the returns first match
        - If no match returns the original string with out change.