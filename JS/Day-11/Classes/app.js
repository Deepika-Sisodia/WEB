
//// constructor function revision

// function Person(firstname,lastname,mail){
//     this.firstName = firstname;
//     this.lastName = lastname;
//     this.email = mail;
// }

// Person.prototype.printName = function(){
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
// }

// Person.prototype.getName = function(){
//     return `My name is ${this.firstName} ${this.lastName}`;
// }

// let person1 = new Person('sam','vohra','sam@gmail.com');
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());

//-----------------------------------
// class syntax

class Person{
    constructor(firstname,lastname,mail){
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = mail;   
    }
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

let person2 = new Person('ms','dhoni','msd@gmail.com');
console.log(person2);
console.log(person2.getName());