

function someFunc(){
    let username = 'einstein';
    function printName(){
        console.log(username);
    }
    return printName();
}
someFunc();

let returnedValue = someFunc();
console.log(returnedValue);