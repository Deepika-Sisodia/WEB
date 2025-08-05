
// let products = document.querySelectorAll('section figure');
// // console.log(products);


// // not the optimiseed way
// for(let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText)
//     })
// }

// dynamically add krne pe dikkat hogi

//----------

// Event Delegation --> parent pe event lagao rather than bahut saare child ke

let section = document.getElementById('container');
section.addEventListener('click', function(e){
    // console.log(e);
    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
    
})

