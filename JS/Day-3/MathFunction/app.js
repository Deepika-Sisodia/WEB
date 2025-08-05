// Math Functions

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.sqrt(25));
console.log(Math.max(32,53,92,89));
console.log(Math.min(32,53,92,89));
console.log(Math.round(453.2332));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.random());

// random number between 1-10

// let num = Math.random()*10;
// console.log(Math.floor(num));


// random number between 21-27 included both

let num = Math.random()*7 + 21;
console.log(Math.floor(num));  // formula : random generated * MF(range) + start of range