// -- Objects

let person = {
    // key --> value
    name: 'Nisharul',
    age:27,
    isMale:true,
    favcolor:'Blue'
};
console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person.favcolor);

console.log(person['name']);

// passed by reference

let person2 = person;
person2.name = "samarth";
console.log(person2.age);
console.log(person2.name);
console.log(person.name);