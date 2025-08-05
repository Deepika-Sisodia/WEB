
// selecting input
let titleEl = document.getElementById('title');

// selecting ul
let listEl = document.getElementById('list');

// selecting btn for event triggering

let addbtn = document.getElementById('add-btn');

addbtn.addEventListener('click', function(){

    // extracting the value from input
    let titletext = titleEl.value;

    // creating the li for appending it
    let li = document.createElement('li');


    // inserting the text inside li from the input value
    li.innerText = titletext;

    // newly created li hai usse append/ add krna
    listEl.append(li);

    // clear krdo apne input ko 
    titleEl.value = '';

    // remove the li after clicking on the li
    li.addEventListener('click', function(){
        li.remove();
    })
})











