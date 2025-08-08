
const express = require('express'); // func
const app = express();  // instance or object


// get 




app.get('/', (req,res)=>{
    res.send('<h3>ye mera "/" path hai </h3>')
})

app.get('/cat', (req,res)=>{
    res.send('<h3>ye mera "/cat" path hai </h3>')
})

app.get('/dog', (req,res)=>{
    res.send('<h3>ye mera "/dog" path hai </h3>')
})


// bad request ko handle
app.get('*' , (req,res)=>{
    res.send('error page 404')
})



app.listen(8080,(req,res)=>{
    console.log('server connected at port 8080')
})