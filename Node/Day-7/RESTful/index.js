const express = require('express');
const app = express();
const path = require('path');

// dummy array instead of DB

let comments = [
    {
        id: 0,
        username: "Akshay",
        comment: "kuch nhi"
    },

    {
        id: 1,
        username: "SAchin",
        comment: "kaun"
    },

    {
        id: 2,
        username: "Javed",
        comment: "laal hai"
    },

    {
        id: 3,
        username: "Ojasawa",
        comment: "puls aa gyi"
    },
    
]

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded( {extended: true}));

app.get('/', (req,res)=>{
    res.send('root mei aapka swagat hai...')
})

// task-1
app.get('/blogs', (req,res)=>{
    res.render('index',{comments});
})

// task-2

app.get('/blog/new', (req,res)=>{
    res.render('new');
})

// task-3

app.post('/blogs', (req,res)=>{
    // console.log(req.body);
    let {username, comment} = req.body;
    comments.push({username, comment, id: comments.length});
    // res.send('Data aa gaya')
    res.redirect('/blogs'); // important : proper path
})

// task 4 : show info about one particular block
app.get('/blog/:id', (req,res)=>{
    let id = parseInt(req.params.id);
    let foundComment = comments.find( (comment) =>{
        return comment.id === id;
    } )
    res.render('show', {foundComment});
})




app.listen(8080, ()=>{
    console.log('server connected at port 8080');
})