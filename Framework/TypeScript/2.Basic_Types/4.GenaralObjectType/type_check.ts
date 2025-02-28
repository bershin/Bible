const person: object = {
    name: "John",
    age: 30
}

console.log(person.nickname)
/*
type_check.ts:6:20 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.

6 console.log(person.nickname)
                     ~~~~~~~~


Found 1 error in type_check.ts:6
*/