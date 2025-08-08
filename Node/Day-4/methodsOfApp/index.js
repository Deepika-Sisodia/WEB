

// used for making server
const express = require('express'); // func
const app = express();  // instance or object



// adding app.use

// without path ie for all incoming requests
// app.use( (req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     console.log('you made a request...')
//     res.send('<h1>mummy mujhhe dress dila do...</h1>')
// })

// without path ie. for specific path only and not int other cases

app.use('/middleware' ,(req,res)=>{
    // console.log(req);
    // console.log(res);
    console.log('you made a request at a specific path middleware...')
    res.send('<h1>horn ok please...</h1>')
})


app.listen(8080,()=>{
    console.log('server connected at port 8080')
})

 















