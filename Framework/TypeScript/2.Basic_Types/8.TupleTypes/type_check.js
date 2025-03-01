var person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, "author"]
};
console.log(person.role); // [2, 'author']
person.role = [2, "author", "admin"];
person.role.push("watching");
console.log(person.role); // [2, 'author', 'watching']
person.role[0] = 3;
console.log(person.role); // [3, 'author', 'watching']
person.role[1] = 10;
/*
type_check.ts:17:1 - error TS2322: Type 'number' is not assignable to type 'string'.

17 person.role[1] = 10
*/ 
