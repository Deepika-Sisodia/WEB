// Inheritance

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

// class Student extends Person{

// }

// let student1 = new Student('barack','obama','obama@gmail.com');
// console.log(student1);
// console.log(student1.email);

class Student extends Person{
    constructor(firstname,lastname,mail,groupNo){
        super(firstname,lastname,mail)
        this.group = groupNo;
    }
    getName(){
        return `super se bhi upar ${this.firstName} ${this.lastName}`; // this getNAme will run because first it will check in student only
    }
}

let student1 = new Student('barack','obama','obama@gmail.com','100');
console.log(student1);
console.log(student1.email);
console.log(student1.getName());