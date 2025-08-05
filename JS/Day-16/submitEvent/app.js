

// let formEl = document.querySelector('form');

// formEl.addEventListener('submit',function(){
//     console.log('form submitted')
// })



// forms default is to submit itself so browser clears itself after submission so we are not able to see the console statement

// to see that console statement, event.preventDefault()

// let formEl = document.querySelector('form');

// formEl.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log('form submitted')
// })


// accessing elements of the forms
// form --> elements (property inside form)

let formEl = document.querySelector('form')

formEl.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(formEl.elements);   // returns collection of all form elements
    console.log(formEl.elements[0].value)
    console.log(formEl.elements[1].value)
})









