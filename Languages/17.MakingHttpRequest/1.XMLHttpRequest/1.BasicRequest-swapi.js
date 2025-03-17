// Basic Request
function reqListener() {
    console.log(this.responseText);
  }
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://swapi.dev/api/planets/1");
req.send();

// Listener function as arrow function
const req1 = new XMLHttpRequest();
req1.addEventListener("load", ()=>{
    console.log("It worked"); // console.log(req); // See all the properties of req
    console.log(req1.responseText);
});
req1.open("GET", "https://swapi.dev/api/planets/1");
req1.send();

//Includes Error
const req2 = new XMLHttpRequest(); // This is the object that makes the "XMLHttpRequest"
req2.addEventListener("load", ()=>{
    console.log("It worked"); // console.log(req); // See all the properties of req
    console.log(req2.responseText); // console.log(this.responseText); // For this to work change arrow function to normal function
});
req2.addEventListener("error", ()=>{
    console.log("Failed");
});
req2.open("GET", "https://swapi.dev/api/planets/1");
req2.send();
console.log("Request Sent"); // Appears first