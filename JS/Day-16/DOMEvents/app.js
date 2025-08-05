
// 1. inline way

// function doSomething(){
//     console.log("Hello inline event");
// }

// let btn = document.getElementById('btn');

// console.log(btn);
// console.dir(btn);

//  2nd way

// onclick event
// let btn = document.querySelector('#btn');

// btn.onclick = function(){
//     console.log("hello duniya dusra tareeka");
// }

// // onmousenter
// btn.onmouseenter = function(){
//     btn.style.color = 'red';
// }

// // onmouseleave
// btn.onmouseleave = function(){
//     btn.style.color = 'black';
// }

// this show that only 1 event is possible at a time.
// let btn = document.querySelector('#btn');
// function one(){
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }

// btn.onclick = one;
// btn.onclick = two; // this will run only 

// solution: eventListner (it allows us to run multiple events on the same element)


// let btn = document.querySelector('#btn');
// function one(){
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }

// btn.addEventListener('click',one)

// btn.addEventListener('click',two)

// let btn = document.querySelector('#btn');
// let body = document.querySelector('body');

// function change(){
//     body.style.backgroundColor='plum';
// }

// btn.onclick = change;

// onclick --> ek baar click kiya
// dblclick --> 2 baar click kiya

// let btn = document.querySelector('#btn');
// function meraFun(){
//     console.log("do baar dabaya hai")
// }
// btn.addEventListener('dblclick',meraFun);