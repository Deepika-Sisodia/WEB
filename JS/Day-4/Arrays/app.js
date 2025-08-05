// //  Arrays

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[31]);

// let arr2 = [1,2,3,'sam','akshay','neha','sachin',null,undefined,true];
// console.log(arr2);

// console.log(arr.length);
// console.log(arr2.length);
// console.log(arr2[5]);
// console.log(typeof(arr2[5]));

// let manish = console.log(arr[2]);
// console.log(typeof(manish)); // wrong way

// console.log(10); console.log(20); console.log(30); 
 
// let arr3 = [1,2,3,'sam','akshay','neha','sachin',null,undefined,true,[1,2,3,4]];
// console.log(arr3);

// console.log(arr3[10][2]);


// Array Methods (All destructive methods)

// let arr = [10,20,30];
// console.log(arr);

// //push
// arr.push(40);
// console.log(arr);

// let ans4 = arr.push(40);
// console.log(ans4);

// //pop
// arr.pop();
// console.log(arr);

// let ans3 = arr.pop();
// console.log(ans3);

// //unshift
// arr.unshift(100); // add the data in the start
// console.log(arr); 

// let ans1 = arr.unshift(100);
// console.log(ans1);  //returns length

//shift
// arr.shift(); // shift the starting index
// console.log(arr);

// let ans2 = arr.shift();
// console.log(ans2); // returns shifted value
// console.log(arr)

// // More Methods

// 1. slice

// let arr = [10,20,30,40,50,60,70,80];
// console.log(arr);

// //slice
// console.log(arr.slice(2,4)); // returns the array with the given indexes [start,end)

// 2. splice

// console.log(arr.splice(3,4)); //deletes the indexed of the given range [start,length]
// console.log(arr.splice(3,4,'sam','deepika',90)); // deleted items replace by the given.
// console.log(arr);

// // split  //only for strings

// let url = 'https://google.com/search/dog/best/color/black';

// let ans = url.split('/');  //returns an array
// console.log(ans);

// // join // array
// console.log(ans.join('/')); //returns joined string of array.

// // concatenation (some for strings also)
// let arr1 = [10,20,30,40,50,60,70,80];
// let arr2 = ['sam','mohd','hardik'];
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));


// includes // returns boolean value

// let arr3 = ['sam','mohd','hardik'];
// console.log(arr3.includes('moh'));

// let str = "samarth";
// console.log(str.includes('m'));

// indexOf // returns index

// let arr3 = ['sam','mohd','hardik'];
// console.log(arr3.indexOf('sam'));
// console.log(arr3.indexOf('sa'));

// let str = 'samarth';
// console.log(str.indexOf('a'));

// reverse (D)

// let str = 'samarth';
// console.log(str.reverse);

// let arr = ['sam','mohd','hardik'];
// console.log(arr.reverse());