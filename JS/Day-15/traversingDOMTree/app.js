
// properties
// 1. parentElement

let para1 = document.querySelector('#para1');
let arti1 = document.querySelector('#arti');
let div3 = document.querySelector('#div3');

console.log(para1.parentElement.parentElement.parentElement);

// 2. child

// console.log(arti1.children);
let coll = arti1.children;
for(let item of coll){
    item.style.fontSize = '24px';
}

// 3

console.log(div3.nextElementSibling);

// 4 

console.log(div3.previousElementSibling);





