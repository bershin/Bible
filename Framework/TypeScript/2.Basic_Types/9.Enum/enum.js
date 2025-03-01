var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role: 4, // Downside is remembering numbers
    // role: "READ ONLY USER". // Downside is remembering space or hypen within words.
    role: Role.USER,
};
if (person.role === Role.USER) {
    console.log("Normal User");
}
