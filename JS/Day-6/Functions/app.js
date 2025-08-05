

function sum(){  // function declaration
    let num1 = 10;
    let num2 = 30;
    console.log(num1+num2);
}

console.log(sum());  // function calling

// returning something from function
function sum2(){
    let num1 = 10;
    let num2 = 30;
    return (num1+num2);
}

console.log(sum2());


// parameterised function
function triple(num3){  // catching parameter of argument
    let num1 = 10;
    let num2 = 30;
    console.log(num1+num2+num3);
}

triple(30); // argument


// multiple parameters

function sam(num1,num2){
    return num1+num2;
}

console.log(sam(30,40));
console.log(sam(30)); // 30 + undefined = NaN

// nothing returned and less arguments
function sam1(num1,num2){
    console.log(num1); //30
    console.log(num2); // undefined
}

console.log(sam1(30));

// default parameterised function
function sam2(num1,num2=40){
    console.log(num1);
    console.log(num2);
}

console.log(sam2(20));


// if the arguments is given for all then default paremeter will not be work
function sam2(num1,num2=40){
    console.log(num1);
    console.log(num2);
}

console.log(sam2(20,50));


// Example

function gradeCalcutor(marks){
    if(marks>80){
        return 'O';
    }
    else if(marks<=80 && marks>60){
        return 'A';
    }
    else if(marks<=60 && marks>40){
        return 'B';
    }
    else if(marks<=40 && marks>20){
        return 'C';
    }
    else{
        return 'F';
    }
}

console.log(gradeCalcutor(50));
console.log(gradeCalcutor(1000));
console.log(gradeCalcutor('samarth')); // failed case

