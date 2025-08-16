const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
// dummy array instead of DB

let comments = [
    {
        // id: 0,
        id : uuid(),
        username: "Akshay",
        comment: "kuch nhi"
    },

    {
        //id: 1,
        id : uuid(),
        username: "SAchin",
        comment: "kaun"
    },

    {
        //id: 2,
        id : uuid(),
        username: "Javed",
        comment: "laal hai"
    },

    {
        // id: 3,
        id : uuid(),
        username: "Ojasawa",
        comment: "puls aa gyi"
    },
    
]

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded( {extended: true}));
app.use(methodOverride('_method')); // method overriding for post to patch


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
-
app.post('/blogs', (req,res)=>{
    // console.log(req.body);
    let {username, comment} = req.body;
    comments.push({username, comment, id : uuid()});
    // res.send('Data aa gaya')
    res.redirect('/blogs'); // important : proper path
})

// task 4 : show info about one particular block
app.get('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=> comment.id == id);
    res.render('show', {foundComment});
})

// task 5;
app.get('/blogs/:id/edit', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=> comment.id == id);
    res.render('edit',{foundComment})
})

// task 6 : actually editing the blog using patch not put
app.patch('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=> comment.id == id);
    let {comment} = req.body;
    foundComment.comment = comment; // changing already present data to calc. data
    res.redirect('/blogs');
})

// task-7 : delete a particular blog

app.delete('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let newArr = comments.filter((comment)=>{return comment.id != id});
    comments = newArr;
    res.redirect('/blogs');
})

app.listen(8080, ()=>{
    console.log('server connected at port 8080');
})