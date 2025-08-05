

// using fetch for calling an api

fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
    .then(function(response){
        // console.log(response);
        return response.json(); //.json() also returns a promise
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })







