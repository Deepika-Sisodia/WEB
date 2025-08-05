

// file

let pi = Math.PI;
console.log(pi);

let ans = (num)=>{return num*num};

let ans1 = num => num*num;
let ans2 = (a,b)=>a+b;

console.log(ans);
console.log(ans1);
console.log(ans2);

// export behaviour by defaullt as we used require()
// by default exports an empty object {}

// module.exports = {};   //by default

module.exports = {pi, ans1, ans2};

// obj == key:value

// module.exports = {pi:pi, //-->pi
//     ans1:ans1, //-->ans1
//     ans2:ans2  //-->ans2
// };

// we export anything

module.exports = ('samarth vohra')