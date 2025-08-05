
// console.log(document);

// Selectors:

// 1.getElementsByTagName()

// console.log(document.getElementsByTagName('h1')); // returns the array of all h1;


// let h1Arr = document.getElementsByTagName('h1');
// console.log(h1Arr[0]);
// console.log(h1Arr[1]);

// // loop 
// for(item of h1Arr){
//     console.log(item);
// }

// let para = document.getElementsByTagName('p');

// for(item of para){
//     // console.log(item);
//     // item.style.color = 'red';
//     item.style.border = '2px solid blue';
// }


// 2.getElmentById():

// let id = document.getElementById('sam');
// console.log(id);
// id.style.color='purple'

// 3.getElementByClassName();

// let para = document.getElementsByClassName('dom');
// console.log(para);
// for(item of para){
//     console.log(item);
//     item.style.color = 'orange';

// }

// 4. querySelector():
// let h1 = document.querySelector('h1');
// console.log(h1);

// let dom = document.querySelector('.dom');
// console.log(dom);

// let sam = document.querySelector('#sam');
// console.log(sam);


// // 5. querySelectorAll():

// let dom = document.querySelectorAll('.dom');
// console.log(dom); // returns NodeList