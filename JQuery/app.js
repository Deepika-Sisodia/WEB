
// // selecting elements

// // $('h1) --> same like querySelectorAll

// // console.log($('h1'));


// // manipulating

// // css adding 

// // $('h1').css('color', 'red')
// // $('h1').css('backgroundColor', 'yellow')

// // adding multiple css properties
// // $('h1').css({
// //     color: 'red',
// //     backgroundColor : 'plum'
// // })                           // object

// // access text

// console.log($('p').text());

// console.log($('p').text('senorita'));  // textcontent

// console.log($('p').text('<em>senorita</em>')); 

// console.log($('p').html())

// console.log($('p').html('<em>senorita</em>')) // innerHTML

// // they both works as getter and setter


// manipulating attributes------

// console.log($('a').text());

// console.log($('a').attr('href')); // getter

// console.log($('a').attr('href','https://www.facebook.com')); //setter

// selecting particular element

// $('h1:nth-of-type(2)').css('border','2px solid plum')

// $('h1:first()').css('border','2px solid plum')

// $('h1:last()').css('border','2px solid plum')

//  methods

// $('h1').last().css('border','5px solid plum')

// $('h1').first().css('border','5px solid plum')


// getting value of inputs

// console.log($('input').val()); // works both as getter and setter in direct console


// class manipulation

// multiple adding and remove can done

// // addClass()
// $('h1').first().addClass('second');

// // removeClass()
// $('h1').first().removeClass('second');

// // toggleClass()
// $('h1').first().toggleClass('second');
// $('h1').first().toggleClass('second');

// hasClass()

// $('h1').first().hasClass('second'); // --> false   //single


// events

// click
// $('button').click(function(){
//     console.log('Clicked!!')
// })

// // new concept and important  // this
// // this is not same as that of your js
// // event.target == this (same kaam karega almost)
// // 'this' points to the element over which the event is being triggered

// $('li').click(function(){
//     $(this).css('color','crimson');
// })


// input---

// $('input').keyup(function(){
//     console.log($(this).val());
// })

// addEventListener --> 'on'

// $('button').on('click', function(){
//     console.log('Clicked!!')
// })


// $('input').keypress(function(e){
//     if(e.which == 13){
//         // console.log('bhaukal')
//         console.log($(this).val())
//     }
//     // console.log(e);
// })


// effects

// $('#fadeout').click(function(){
//     $('#container').fadeOut()
// })

// $('#fadein').click(function(){
//     $('#container').fadeIn()
// })

// $('#fadetoggle').click(function(){
//     $('#container').fadeToggle()
// })



// sources

// JQuery.com --> api docs
// you might not need JQuery .com