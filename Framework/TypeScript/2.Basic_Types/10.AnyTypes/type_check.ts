const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favouriteActivity: any[]
favouriteActivity = ["Sports", 1]

/* Flexible Array */
// let favouriteActivity: any[] 

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}