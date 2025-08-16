const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log('DB connected successfully');
})
.catch((err)=>{
    console.log("error while connecting DB");
    console.log(err);
})

// schema (blue-print)
const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    year: Number,
    isWatched: Boolean
})


// model (JS class)

const Movie = mongoose.model('Movie',movieSchema);

// console.log(Movie);

// making a new object
let ironman = new Movie({
    name: "Ironman",
    rating:8,
    year:2015,
    isWatched:true
})

ironman.save() // db ke andr object ko store karega...
console.log(ironman);




