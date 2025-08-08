

const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs'); // set the view engine
// app.set('views','process.cwd() + "./views"') // default
// app.set = ('views',path.join(__dirname,'views')); // better

const todos = ['go to gym', 'go to club','drink water'];


// // root route
// app.get('/', (req,res)=>{
//     // res.send('Hi');
//     res.render('index'); // process.cwd + ./views == __dirname
// })

// random  file route

app.get('/random',(req,res)=>{
    let num = Math.floor(Math.random()*100)
    res.render('random',{num});
})

// show your tasks

app.get('/todo', (req,res)=>{
    res.render('todos',{todos});
})

app.listen(8080, ()=>{
    console.log('server connected at 8080...')
})