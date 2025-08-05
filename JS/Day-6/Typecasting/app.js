// outputs

function deep(num1, num2){
    return num1+num2;
}

console.log(deep(20,30));
ans1=(deep(20,'sam'));
console.log(ans1);
console.log(typeof(ans1));
let ans = (deep(10,true));
console.log(ans);
console.log(typeof(ans));

let ans2 = deep('100',false);
console.log(ans2);
console.log(typeof(ans2));