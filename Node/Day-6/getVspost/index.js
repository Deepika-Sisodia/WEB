const express = require('express');
const app = express()
const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded( { extended: true })) //  middleware to get the form data
app.use(express.json()); // middleware for json data

app.get('/',(req,res)=>{
    res.render('index');
})


// get request
app.get('/user', (req,res)=>{
    // console.log(req.query)
    let {username, age} = req.query;
    console.log(username)
    res.send('get request sent successfully...')
})


// post request
app.post('/user', (req,res)=>{
    console.log(req.body);
    res.send('post request sent successfully...');
})


app.listen(8080, ()=>{
    console.log('server connected at port 8080');
})