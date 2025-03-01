var person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favouriteActivity;
favouriteActivity = ["Sports", 1];
/* Flexible Array */
// let favouriteActivity: any[] 
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
