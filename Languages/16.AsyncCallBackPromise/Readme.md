### What is callstack?
A mechanism in JavaScript to keep track of functions called.(finger in a book)
- http_client_request -> Promise(manage async) -> Async -> call back
- Call back Task
    - isRightAngleTriangle(3,4,5) -> square -> multiply
    - renderRandText(phrase, document.body) -> create element & append -> repeat(8) -> scream(upper),
- DEBUG the task and watch the "callstack" in browser

- JS is single threaded
    - Task: Show JS does one thing at a time.
    - Does that means JS should wait till network delay and save to database?
    - Thats where callback is used as workaround
        - For the process that take time we pass that in a callback function.
    - How can JS set timer for 3 second if it can do one thing at a time?
        - JS is the language implemented in browser. But the browser is written in C++.
        - Browser is also capable of doing something where JS sucks.
        - JS executes the browsers "webapi", so that browser is capable of handling and tracks it and JS move to next line.
        - Browser put the code in "callback queue", once the timer is done.
        - Now JS executes it.
    - The eventlisterner is also something JS hands over to the browser to listen in background and alerts back to JS.
    - Site explains how this works
        - http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D 

### Promises basic
- Promises is a "java script object" which represents the completion or failure of asynchronous operation(eventual process, that take time).
    - Promise is a returned object to which you attach callbacks, instead of passing callback as a function.
- Promises allow us to write asynchronous code that is much easier to read and understand. 
    - It is usually shorter, means flatten rather than nested.
    - Its an alternate for callback hell 