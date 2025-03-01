type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }
   
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }   
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

greet(u1)
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
console.log(isOlder(u1, 45))