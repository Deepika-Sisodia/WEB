// Conditionals

// 1. if

let num = 32;
// if(num>=40){
//     console.log("true");
// }

if(num<=40){
    console.log("true");
}

// 2. if-else

// let mood = prompt("Type your mood:");
// if(mood=="happy"){
//     console.log("It will be good day for me.");
// }
// else{
//     console.log("It will be bad day for me.")
// }

// 3. if-else if-else

let age = parseInt(prompt("Enter your age:"));
if(age<18){
    console.log("Not Allowed to go to the club.");
}

else if(age>=18 && age<21){
    console.log("Allowed to go to the club but not to drink");
}
else{
    console.log("Allowed to go to the club and to drink also");
}