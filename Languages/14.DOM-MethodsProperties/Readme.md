### "innerText"
- Select -> Return string
    - Extract the inner text removes the tag
        - `const h1 = document.querySelector("h1")` / `h1.innerText` -> Shows text.
        - `const ul = document.querySelector("ul")` / `ul.innerText` -> Shows just text in li.
        - `const body = document.querySelector("body")`/ `body.innerText` -> Show unformatted context ignoring tags.
    - Do not show hidden content. `<b style="display: none">blahblah</b>`
- Update
    - `h1.innerText = "Im hungry"`
    - `ul.innerText = "Im hungry"` Not a good idea to update ul.
### "textContent" -> Extract the inner text
- Select -> Return string
    - Same as innerText. Extract the text in inner tags removes the tag.
    - `const p = document.querySelector("p") / h1.textContent` -> Show formatted context ignoring tags.
### "innerHTML"
- Select -> Return string
    - `const form = document.querySelector("form") / form.innerHTML` Extract the text with the tag inside <form>
- Update
    - `h1.innerHTML = "<h2>Section-1</h2>"`
- Append
    - `h1.innerHTML += "is cool"`

### value, src, href
- Input `const input = document.querySelectorAll('input')`
    - Get Text value -> `input[0].value` -> string
    - Get Radio value -> `input[0].checked` -> boolean
    - Get Range value -> `input[0].value` -> string
    - Update the text to empty after search -> `input[0].value = ''`
- Anchor `const a = document.querySelectorAll('a')`
    - get value `a.href`
    - update value `a.href = "http://www.google.com"`
- Image `const img = document.querySelectorAll('img')`
    - Get value `img.src`
    - update value `img.src = "http://image.jpg"`
### getting or setting attribute
class, id, href, src, type are attributes 
- getting attribute
    - `const range = document.querySelector('input[type="range"]')` 
        - `range.getAttribute('max')` / `range.getAttribute('min')` / `range.getAttribute('type')`
- setting attribute
    - `range.setAttribute('max', '500')`
    - `range.setAttribute('type', 'radio')` -> Change the element from range to radio type.
### Select Parent/Child/ Sibling
- parent - `parentElement`
    - `const firstLi = document.querySelector('li')`
    - `firstLi.parentElement.parentElement`
- Children - `children[i]`
    - `const ul = document.querySelector('ul')`
    - `ul.children[0].innertext`
- Sibling - `nextElementSibling` (or) `previousElementSibling`
    - `firstLi.nextElementSibling` -> next sibling
    - `const thirdLI = firstLi.nextElementSibling.nextElementSibling`
    - `thirdLI.previousElementSibling`
### Change multiple element
```
const allLis = document.querySelectorAll('li')
for(let i = 0; i < allLis.length; i++){
    console.log(allLis.innertext)
}
```
For each
```
const allLis = document.querySelectorAll('li')
for(let li of allLis){
    li.innerHTML = 'I am <b>Strong</b>'
}
```
### Altering Styles - get inline style value
> Styles inside elements won't be visible, unless defined as inline.
- `const h1 = document.querySelector("h1")`
    - get all possible styles `h1.style` 
    - `h1.style.color`( inline is only visible )
> Style properties are camelCased
- Set `h1.style.color = 'orchid'`
- `h1.style.backgroundColor = 'orange'`
```
const color = ["red","blue","green", "pink"]
const allLis = document.querySelectorAll('li')
allLis.forEach((li, idx)=>{
    li.style.color = color[idx]
}
```

### Get computed style value 
 - `const li = document.querySelector("li")`
 - `const styles = getComputedStyle(li)`
 - `styles.font-size`

 ### Manipulate class
 Html for todo
 ```
<ul id="todos">
    <li class="todo">Mow lawn <button>X</button></li>
    <li class="todo">Do homework <button>X</button></li>
    <li class="todo">Go to Sleep <button>X</button></li>
</ul>
 ```

 JS in multi line to change style
 ```
const todo = document.querySelector("#todo .todo")
todo.style.color = "gray"
todo.style.textDecoration = "line-through"
todo.style.opacity = "50%"
 ```
  css - Create CSS and set on the element by two ways.
 ```
.done {
    color: "gray";
    text-decoration: "line-through";
    opacity: "50%";
}
 ```
> Set css style using class attribute - complicated
 - Get the class set already `todo.getAttribute('class')`
 - Set `todo.setAttribute('class', 'done')` - Downside is we overrite the existing todo class with "done" class
- Set `todo.setAttribute('class', 'todo done')` - Possible but hardcoding  
> Set css style using "class list"(DOMTokenList) - Single line
- Get `todo.classList` -> DOMTokenList
    - Remove - `todo.classList.remove('done')` -> remove once next time ignores
    - Add - `todo.classList.add('done')` -> add once next time ignores
    - Toggle - `todo.classList.toggle('done')` -> true/false
- Other way of doing
    - `todo.getAttribute('class').includes('done')` -> false
    - `todo.setAttribute('class', todo.getAttribute('class') + ' done')`

### Create Elements and append
> Create a Element and add text and style.
- Create a h2 element `const newh2 = document.createelement('h2')`
- Add text `newh2.innertext = "My subheading"`
- Add class `newh2.classList.add('special')`  
> Append the created element 
- H2 `const section = document.querySelector('section')`
    - Append in section `section.appendChild("newh2")`
- Image `const newImg = document.createElement('img')`
    - `newImg.src = 'https://dfff'`
    - `newImg.style.width = '200px'`
    - Append in body `document.body.appendChild("newImg")`
> Insert Element 
- Select a parent element `const parentUl = document.querySelector('ul')`
- Create a new element `const newLi = document.createElement('li')`
    - Update element `newLi.innerText = "i am new Li"`
- Select a element to insert before `const firstLi = document.querySelector('li.todo')`
- Insert the element `parentUl.insertBefore(newLi, firstLi)`
> Sofisticated Insert, "innerAdjacentElement" - (beforebegin/afterbegin/afterend/beforeend)
- Create new element `const i = document.createElement('i')`
- Add text to new element `i.innerText = "i am italic"`
- Select a element to insert `const firstP = document.querySelector('p')`
- insert `firstP.innerAdjacentElement('beforebegin', i)`
> Append / prepend   (multiple element)
- insert after `firstP.append(i, newLI)`
- Insert before `firstP.prepend(i, newLI)`
* Both doesn't work with IE.
* Same as appendChild, but can insert multiple element.
### removeElement / remove
- removeChild -> **Need parent element
    - Select `const ul = document.querySelector('section ul')`
    - Select `const removeMe = ul.querySelector('.special)`
    - Delete `const deleted = ul.removeChild(removeMe)`
- remove -> **No Need parent element
    - Select `const h1 = document.querySelector('h1')`
    - Delete `h1.remove()`
