

// function some(){

// }
// console.log(some());
// // returns undefined

// let p1 = new function(){

// }
// console.log(p1);
// return an empty object

async function some(){
    await new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log('3 sec hogaye...')
            resolve();
        },3000)
    })

    await new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log('2 sec hogaye...');
            resolve();
        },2000)
    })

    console.log('dono kaam ho gaye')
}
some();
// returns promise










