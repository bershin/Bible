Issue:
    With axios use "then" to get the async data
    Cannot make axios to return data directly to variable. 
    It returns a promise object.
    So, the return value is not what we expect.
    We can use async and await to solve this issue.
### ASYNC Functions
- Async function always return a promise. Async in front of a function return promise.
    - If a function returns value, the promise will be resolved with that value.
    - If a function throws an exception, the promise will be rejected.
- Async features
    - Depends heavily of promises
    - Asyn are nice syntatical suger for promises.
    - It gives clean syntax for promises.

### AWAIT Functions
- Await is only used inside os a function declared as "Async"
- Await will pause the execution of the function until the promise is resolved.
- No need to nest things with "then".

### Error handing.
- try/catch -> Handles specific error in a functio
- Catch in callback handles common error in any of the errors in chain.

### Promise.all
- Steps for promise.all
    - Takes an array?
    - Runs in parallel?
    - Waits for all to resolve?
    - Rejects immediately, if any one fails?
        - To avoid, Use try catch in each promise inside promise all.
- Since promises is an array of promises, we need Promise.all() to wait for all of them to complete:
- Promise.all() takes the array of promises and waits until all of them are resolved.
- Promise.all(): Use when all promises must succeed for the operation to be considered successful. If a single failure should prevent further execution, then Promise.all() is the better option.

### Promise.allSettled
- Promise.allSettled() takes an array of promises, waits for them all to settle(resolve/reject) not pending, and returns an array of result objects (not promises).
- Each result object contains a status ("fulfilled" or "rejected") and either a value or a reason (depending on the status).
    - status: "fulfilled" or "rejected".
    - value (if fulfilled) or reason (if rejected).