

function fun(){

}
let fun1 = fun();
console.log(fun1);

// constructor function

function User(username,email){
    this.username = username;
    this.email = email;

}
let user1 = new User('samarth','samarthvohra.india@gmail.com');
let user2 = new User('coding block','codingblock.india@gmail.com');
console.log(user1);
console.log(user2);



// function User(username,email){
//     this.username = username;
//     this.email = email;

//     this.description = function(){
//         return `my name is ${this.username}`;
//     }

// }
// let user1 = new User('samarth','samarthvohra.india@gmail.com');
// let user2 = new User('coding block','codingblock.india@gmail.com');
// console.log(user1);
// console.log(user1.description());
// console.log(user2);
// console.log(user2.description());

// function User(username,email){
//     this.username = username;
//     this.email = email;


// }

// User.prototype.description = function(){
//         return `my name is ${this.username}`;
//     }

// let user1 = new User('samarth','samarthvohra.india@gmail.com');
// let user2 = new User('coding block','codingblock.india@gmail.com');
// console.log(user1);
// console.log(user1.description());
// console.log(user2);
// console.log(user2.description());