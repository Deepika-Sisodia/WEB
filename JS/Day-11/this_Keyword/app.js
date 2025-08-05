// this keyword

// ways of function calling and how 'this' will be use

// 1. regular invocation

// function fn(){
//     console.log(this); // points window object
// }
// fn();


// 2. method invocation

// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this); // points to the object over which it it called
//     }
// }
// obj.fn();

// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this); // points to the window as there is normal calling
//     }
// }
// let fun = obj.fn;
// fun();

// let obj2 = {
//     fn: function(){
//         function calculate(){
//             console.log(this);  // it is also points to window.
//         } 
//         calculate(); 
//     }
// }
// obj2.fn();

// 3. constructor invocation

// function CreateObj(){
//     this.x = 20;
// }
// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x); // this will points to newly created object always

// Indirect Calling : .call(), .apply(), .bind() 

// let obj = {
//     a: 20,
//     fn: function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }

// let obj2 = {
//     a: 50
// }

// let obj3 = {
//     name: 'samarth'
// }
// obj.fn() // point to object 
// obj2.fn(); //error

// obj.fn.call(obj2); // points to obj2
// obj.fn.call(obj3, 1,2,3);

// obj.fn.apply(obj2);
// obj.fn.apply(obj3,[5,6,7]); 


// .bind()

let obj3 = {
    num:3,
    fn: function(){
        console.log(this);
    }
}

let myfun = obj3.fn.bind(obj3); //context of this
myfun();