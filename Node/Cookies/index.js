
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// app.use(cookieParser());
app.use(cookieParser('youneedabettersecret'));

app.get('/', (req,res)=>{
    res.send('root connected')
    // console.log(req.cookies);
    // res.send(req.cookies); // all easy cookies
    // res.send(req.cookies); // all signed cookies

})

// signed cookie
app.get('/getsignedcookies',(req,res)=>{
    res.cookie('bindass','sachin',{signed: true})
    res.send('cookies sent successfully');
})

// app.get('/setcookies',(req,res)=>{
//     res.cookie('mode','dark');
//     res.cookie('location','delhi');
//     res.cookie('username','samarth');
//     res.send('server sent you cookies');
// })


// app.get('/getcookies',(req,res)=>{
//     let {mode, location, username} = req.cookies;
//     res.send(`name is ${username}, stay in ${location} and theme is ${mode}`);
// })

app.listen(8080,()=>{
    console.log('server connected');
})