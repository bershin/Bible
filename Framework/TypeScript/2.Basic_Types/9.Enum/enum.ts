enum Role {ADMIN, READ_ONLY, USER}
// enum Role {ADMIN=5, READ_ONLY, USER} // Index start from 5 instead of 0
// enum Role {ADMIN=5, READ_ONLY=100, USER=99} // Have its own number
// enum Role {ADMIN='ADMIN', READ_ONLY=100, USER=99} // Have mixed type
const person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role: 4, // Downside is remembering numbers
    // role: "READ ONLY USER". // Downside is remembering space or hypen within words.
    role: Role.USER,
}

if(person.role === Role.USER){
  console.log("Normal User")
}
