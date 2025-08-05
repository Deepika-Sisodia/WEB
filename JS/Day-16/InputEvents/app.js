
// Input Events

// let inputEl = document.querySelector('input')

// inputEl.addEventListener('input', function(){
//     console.log("input chal gaya bhai logon")
// })

// wheneverban event is run/executed along with the function/ event , an object
// is also attached with it which we can have access of.




// let inputEl = document.querySelector('input');

// function funn(event){
//     console.log(event.target); // gives input tag
//     console.log(event.target.value); // gives value of tag
//     console.log("input chal gaya bhai logon")
// }

// inputEl.addEventListener('input', funn)

// question


let inputEl = document.querySelector('input');
let h2 = document.querySelector('h2');
function fun(event){
    h2.innerText = event.target.value;
}
inputEl.addEventListener('input',fun);




























