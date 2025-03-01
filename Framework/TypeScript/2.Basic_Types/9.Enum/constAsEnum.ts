const ADMIN = 0
const READ_ONLY = 1
const USER = 2

const person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role: 4, // Downside is remembering numbers
    // role: "READ ONLY USER". // Downside is remembering space or hypen within words.
    role: ADMIN,
}

if(person.role === ADMIN){
  console.log("Admin User")
}