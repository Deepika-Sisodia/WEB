// Promises

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let data = 'hi doston ye promise hai';
//         // resolve(data);

//         // let err = 'opps dikkat aagayi';
//         // reject(err);

//         // resolve("hi mai resolve ho gya i.e. .then()");
//         // reject("hi mai lut gaya barbaad hogya i.e. .catch()");

//     }, 3000)
// });


// promise.then(function(data){
//     console.log(data);
// })
// promise.catch(function(err){
//     console.log(err);
// })


// let p1 = new Promise((resolve, reject)=>{
//     console.log('3 second ka wait kro kaam in process...');
//     setTimeout( ()=>{
//         // resolve();
//         reject();
//     },3000)
// });

// p1.then().cath()

// p1.then( ()=>{
//     console.log('kaam ho gya...');
// })
// .catch( ()=>{
//     console.log('error aa gya yaar...')
// })

// .then() chaining

let p1 = new Promise((resolve, reject)=>{
    console.log('3 second ka wait kro kaam in process...');
    setTimeout( ()=>{
        resolve();
        // reject();
    },3000)
});

p1.then( ()=>{
    return new Promise( (resolve, reject)=>{
        console.log('promise run kardia hai intezaar kro ab');
        setTimeout( ()=>{
            console.log('2 second lag gaye bhaisahab');
            resolve();
        },2000)
    })
})
.then( ()=>{
    console.log('dono kaam hogaye mere');
})

.catch( ()=>{
    console.log('error aa gya yaar...')
})

























