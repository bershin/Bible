### Two ways not to add events
onEVENTNAME
- onclick()
    - <button onclick(alert("single clicked"))>Submit</button>
    - <input id="clicker" type="range" min="100" max="500">
- ondblclick 
    - document.querySelector("#clicker").ondblclick = function(){alert("double clicked")}
- onmouseover()
    - <img onmouseover(onme) type="range" min="100" max="500">
    - function onme(){alert("on me")}
- onmouseout
    - btn.addEventListener('onmouseout',()=>{
        btn.innertext = "Click me"
    })
- scroll
    - window.addEventListener('scroll',()=>{
        console.log("Stop Scrolling")
    })
### Get Screen & Browser dimension
(This doesn't change)
Screen -> `window.screen.availHeight`, `window.screen.availWidth`
(This changes)
Browser -> `window.innerHeight`, `window.innerWidth`
    - document.body.clientWidth

### Event Object
- e / evt / event
- keydown -> Event for all keys, quickly when key is pressed down.(when not released, value increases)
    - "tab" respond to keydown, when focused inside input, but not outside to tab.
- keyup -> Event for all keys, when key is released
    - Event happens after keydown.
    - "tab" respond to keyup, when not focused, but insode focused it doesn't respond.
- keypress -> Only respond for printable 'characters' & numbers that shows up. , quickly when key is pressed down.
    - Not for special characters and symbols.
    - happens between keydown & keyup.(when not released, value don't increases)
    - "Delete" is not keypress. But "Return" is a keypress

