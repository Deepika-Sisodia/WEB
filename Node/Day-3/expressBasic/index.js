// express use for making servers
// it is a framework for node js

const express = require('express');  // returns a function

const app = express();     // it returns an entire new object

// console.log(app);


// ask server to ask ur request

app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})











