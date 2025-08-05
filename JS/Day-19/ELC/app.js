

// let grandparent = document.getElementById('grandparent');
// let parent = document.getElementById('parent')
// let child  = document.getElementById('child')


// grandparent.addEventListener('click',()=>{
//     console.log('grandfather clicked !!');
// })

// parent.addEventListener('click',()=>{
//     console.log('father clicked !!');
// })

// child.addEventListener('click',()=>{
//     console.log('child clicked !!');
// })


let grandparent = document.getElementById('grandparent');
let parent = document.getElementById('parent')
let child  = document.getElementById('child')


grandparent.addEventListener('click',(event)=>{
    console.log('grandfather clicked !!');
},true)

parent.addEventListener('click',(event)=>{
    // console.log(event);
    event.stopPropagation();
    console.log('father clicked !!');
},true)

child.addEventListener('click',(event)=>{
    console.log('child clicked !!');
},true)













