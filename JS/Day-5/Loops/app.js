// LOOPS

//for
for(let i=0; i<=5; i++){
    for(let j=0; j<=5; j++){
        if(i==j){
            break;
        }
        console.log(i,j);
    }
}

//while

let num = 100;
while(num >= 0){
    console.log(num);
    num-=10;
}

// for-of

let arr = [10,20,30,40,50];
for(let i of arr){
    console.log(i);
}

// for-in

let person = {
    name: 'sam',
    age: 27,
    isMale: true
}

for(let i in person){
    console.log(i, person[i]);
}