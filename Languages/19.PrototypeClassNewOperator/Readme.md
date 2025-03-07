### Prototype

<details>
<summary> What is prototypes?</summary>
Prototypes are the mechanism by which javascript objects inherit features from one another.

- Objects can have prototype object which act like template object
- Instead of having copies of the template, new object can refer to the template object from one another.
</details>

<details>
<summary>Where are standard methods? How to add your own method to an array itself??</summary>
 
`$ const arr = [1,2,3]`  
`arr`  Expand to see no push methods  
`> arr.push(4)`  Still we are able to use array methods
`> [1,2,3].push(4)`  
`> []` or [1,2,3] Expand to see no methods  

> Define own method in array and execute.

`> arr.sing = ()=>{console.log("hi")}`  
Note: Cannot assign methods directly to [] or [1,2,3]. It will vanish
`> arr` Expand the output in console to see the "sing" method.   
`> arr.sing()` You can also execute to see the output "hi"
</details>
 

<details>
<summary>Where can i see the standard methods like push/pop in array?</summary>

`> Array.prototype`   Expand to see all methods for arrays
`> String.prototype`   Expand to see all methods for string
or)`[1,2,3].__proto__`  
or)
`> arr` Expand to see `__proto__` object
or) `> arr.__proto__`  

Here prototype are the template object for arrays. 
- i.e "Array.prototype", is an object inside Array, which has all the properties & methods 
- When a new array is created this "prototype" template object from "Array" is reference as `__proto__`
- Using `__proto__`,you can access the array method by simply typing `[1,2,3].includes(1)`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

</details>


<details>
<summary>Is there a similar prototype for DOM ?</summary>
Yes.

`$ const body = document.body`  
`> console.dir(body)`  
- Properties "specific to this body" can be see by expanding body object.
- Common methods of body is under `__proto__` (HTMLBodyElement) template object as property.
</details>


<details>
<summary>Can we add a new method in standard String prototype, so that it "inherits" to the string created?</summary>
Yes. 

`> String.prototype.alertMe = ()=>{ alert("Time to study!!!")}`  
`> String.prototype` Expand to see the function.

`> const alarm = "ring"`  
`> alarm.alertMe()` See Alert popup in window.
</details>

<details>
<summary>Can we add a new method in standard "String" prototype, that uses the existing method using "this"?</summary>
Yes. 

```
> String.prototype.upper = function(){ return this.toUpperCase()}
```
> Don't use arrow function

`> String.prototype` Expand to see the function.

`> "hi".upper()` See the output as "HI"

> Note: we can also do like this
```
> String.prototype.upper = function(){return `UpperCase: ${this.toUpperCase()}`}
```
</details>

<details>
<summary>Can we overrite an existing standad method?</summary>
Yes. 

`> Array.prototype.pop = function(){ return "You poop!!!"}`
> Don't use arrow function

`> Array.prototype`  Expand to see the function.

`> [1,2,3].pop()`  See the output as "You poop!!!"

> Note:
```
> String.prototype.upper = function(){return `UpperCase: ${this.toUpperCase()}`}
```
</details>

## OOPs Introduction

### Example of OOPs are
`console.dir(document.queryselector('h1'))`

`new XMLHttpRequest()`

