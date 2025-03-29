// The closest variable is used
function outer() {
  let msg = 'I am outside!';
  function inner() {
    let msg = 'I am inside!';
    console.log(msg); // I am inside!
    function innerInner() {
      console.log(msg); // I am inside!
    }
    innerInner() 
  }
  inner();
  console.log(msg); // I am outside!
}
outer();

// Inner function has access to variable declared outside function
function external() {
    let msg = 'I am outside!';
    function internal() {
      console.log(msg); // I am outside!
      function core() {
        console.log(msg); // I am outside!
      }
      core() 
    }
    internal();
    console.log(msg); // I am outside!
  }
  external();