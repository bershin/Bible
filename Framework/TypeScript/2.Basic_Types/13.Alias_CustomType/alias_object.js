var u1 = { name: 'Max', age: 30 }; // this works!
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }   
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
greet(u1);
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
console.log(isOlder(u1, 45));
