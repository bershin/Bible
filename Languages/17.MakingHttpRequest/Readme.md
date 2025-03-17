### Difference between single & Multi page
- Page refresh/reloads when we search or click a new document inside it.
    - Each time a New URL is processed by server and rendered in browser. Eg) MDN Page -> Multipage
    - When search or clicked the page doesn't refresh but the content changed. - Eg) caniuse.com Single page
    - Inspect caniuse.com

### XHR
AJAX -> Asynchronous JavaScript And XML
- Orinal way of sending request via JS
- Do not support promises - So may need callbacks.
- Clunky syntax and difficult to remember
- Response doesn't needs to be XML
- Nested is very hard 

### Fetch
- Newer way of making request via JS
- Cleaner Syntax & Easier to remember.
- It Supports Promise
- Not supported in I.E
- Response contains body, status, ok, etc
- content is located in the response body as "stream".
    - Its a Readable stream of byte data. You can access & process "as you go"
    - "response.json()" reads the stream and provide another promise.
        - The content is on the result session.
- Reject on only network failure for catch to encounter it.
    - Use if condition with 'response.ok' - No catch
        - Throw new Error(``) - Catch encounter 
- Promise.resolve(data)

### AXIOS
- Library for making http requests.
- External library, uses fetch behind the scenes
- It is promises based
- It can be used in client & server side(nodejs)
    - ClientSide: In Browser index.html include `<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>` above "script" line.
    - ServerSide: import axios from 'axios' (or) const axios = require('axios')
- After including type 'axios' in console to verify.
- Unlike 'fetch' no need to do JSON parsing.(inside 'data')
- Catch works for network of other error.
    - No need to throw like fetch for errors.

### JSON - Java Script object notation
XML & JSON - 2 Way fo "formatting data"

JavaScript Object
```
{
    person:{
        name: {
            first: 'Berchin',
            last: 'John',
        }
        email: 'bershin@gmail.com',
        age: 34,
        degrees: ['B.E', 'M.S']
    }
}
```

JSON
```
{
    "person": {
        "name": {
            "first": "Berchin",
            "last": "John"
        },
        "email": "bershin@gmail.com",
        "age": "34",
        "degrees": [
            "B.E",
            "M.S"
        ]
    }
}
```
- In JSON all keys & strings are surrounded by double quotes.
- ALl lines are terminalted by comma, except last item optional.
- See the network XHR for https://swapi.dev/
- validate json https://jsonformatter.org
XML
```
<person>
    <name>
        <first>Berchin</first>
        <last>John</last>
    </name>
    <email>bershin@gmail.com</email>
    <age>34</age>
    <degrees>
        <degree>B.E</degree>
        <degree>M.S</degree>
    </degrees>
</person>
```
- XML requires a root element
- In XML, there’s no strict distinction between arrays (lists) and objects (dictionaries) like in JSON.
    - If an XML tag contains only one occurrence of a sub-element, it’s treated as an object (dictionary).
    - Can use attribute to differentiate `<degrees type="array">`
