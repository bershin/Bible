## Arrays
Arrays are collection of values
- In JavaScript arrays can have same or mixed types.
- arrays are Ordered

### Arrays are mutable
- Update items in array - using index
- Add to end - `push`
    - Returns no. of items in the updated array
    - Can add one or more item
- Remove from end - `pop`
    - return the removed item
- Add to start - `unshift`
    - Returns no. of items in the updated array
    - Can add one or more item (more item check)
- Remove from start - `shift`
    - return the removed item
### Concat
- Do not mutate original array
- Can concat more than two arrays
### includes
- If present true otherwise false
- Look for exact match
- Look for text from starting index.
### indexOf
- If present return first matched index otherwise -1
- Look for exact match
- Look for text from starting index.
### Reverse
- Reverse the item in array
- Mutates the original array
- Can reverse array with 
### Join
- Joins array to string
- Do not modifies original array
### Slice
- Same as string slice
- Out of bound return empty array
- Can use one or two args
- Used to copy an array
### Splice
- Used to insert, delete, replace
    - When deleting, deleted item is returned as array
- Mutate the original array
- Syntax array.splice(index, no_item_delete, "Items to insert")
### Sort
- Sort well with String(lexographical)
- Mutate the original array
### Reference 
- Primitive type like number, strings are value type variables
- Arrays & Objects are reference types.(address)
    - Thats why you can use "const" for arrays & objects
### Const in array
Array as const can be modified
- As long as the reference do not change the internal item can change 
- Always use const.

### Nested Array
Array within array