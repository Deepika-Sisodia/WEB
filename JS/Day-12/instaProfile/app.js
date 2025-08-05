// // galat

// function step1(){
//     setTimeout(function(){
//         console.log('image select kr rha hoon');
//         return 'image';
//     },4000);
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kr rha hoon ${image} rukja`);
//         return 'sundar photo';
//     },2000)    
// }

// function step3(fiteredImage){
//     setTimeout(function(){
//         console.log(`badiya sa caption on ${fiteredImage}`);
//         return 'photva pluss captionava dono';
//     },3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(`${final} uploaded`)
//     },2000)
// }

// // calling

// let image = step1();
// let fiteredImage = step2(image);
// let finalImage = step3(fiteredImage);
// step4(finalImage);


// better tareeka


function step1(fn){
    setTimeout(function(){
        console.log('selecting image');
        // return 'image';
        fn('image');
    },4000);
}

function step2(image,cb){
    setTimeout(function(){
        console.log(`applying filter to ${image} rukja`);
        // return 'filtered photo';
        cb('fitered image');
    },2000)    
}

function step3(fiteredImage, cb){
    setTimeout(function(){
        console.log(`putting caption on ${fiteredImage}`);
        // return 'captioned image';
        cb('fitered with caption')
    },3000)
}

function step4(final){
    setTimeout(function(){
        console.log(`${final} uploaded`)
    },2000)
}

step1(function(image){
    step2(image,function(fiteredImage){
        step3(fiteredImage, function(finalImage){
            step4(finalImage);
        });
    })
})


// advantages of this callback calling
// one function runs after the one already completed

// disadvantages
// callback hell / pyramid of doom due to this nesting of callback functions
// dependency bahut jyda hai 3rd step will not before 2nd.

























