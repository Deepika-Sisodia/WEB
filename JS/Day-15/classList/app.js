
// // Add

let arti = document.querySelector('article')
arti.classList.add('sam','samarth');

arti.classList.add('neha');

// remove

arti.classList.remove('sam');

// toggle

// arti.classList.toggle('toggle');
// // true
// arti.classList.toggle('toggle');
// // false

// contains

console.log(arti.classList.contains('sam')); // false
console.log(arti.classList.contains('neha')); // true