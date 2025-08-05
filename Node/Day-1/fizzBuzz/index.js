
// approach-1

// function fizzBuzz(n){
//     for(let i=1; i<=n; i++){
//         if(i%3===0 && i%5===0){
//             console.log("fizzBuzz");
//         }

//         else if(i%3===0){
//             console.log('fizz');
//         }

//         else if(i%5===0){
//             console.log('Buzz');
//         }

//         else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);


// approach-2

// function fizzBuzz2(n){
//     for(let i=1; i<=n; i++){
//         let str = '';
//         if(i%3 === 0){
//             str += 'Fizz';
//         }

//         if(i%5 === 0){
//             str += 'Buzz';
//         }

//         if(str === ''){
//             str +=i;
//         }

//         console.log(str);
//     }
// }

// fizzBuzz2(20);


// approach - 3

function fizzBuzz3(n){
    let cnt3 = 1;
    let cnt5 = 1;
    for(let i=1; i<=n; i++){
        let str = '';

        if(cnt3 == 3){
            str+='Fizz';
            cnt3 = 0;
        }

        if(cnt5 == 5){
            str+='Buzz';
            cnt5 = 0;
        }

        if(str == ''){
            str+=i;
        }

        console.log(str);
        cnt3++;
        cnt5++;
    }
}

fizzBuzz3(20);





