//  snake game

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')

let cellsize = 40; // height and width for each cell
let boradWidth = 1000;
let boardHeight = 600;
let snakeCells = [[0,0]]; // 2d array to store the snake rectangle
let direction = 'right';

let gameOver = false; // after hitting --> true;

let foodCells = generatefood(); // we need x and y
let score = 0;


// repeat work
let intervalId = setInterval(function(){
    update();
    draw();
},200)

// keydown event
document.addEventListener('keydown',function(event){
    console.log(event.key);
    if(event.key == 'ArrowDown'){
        direction = 'down'
    }
    else if(event.key == 'ArrowUp'){
        direction = 'up'
    }

    else if(event.key == 'ArrowLeft'){
        direction = 'left'
    }
    else{
        direction = 'right'
    }
})

// function to draw snake
function draw(){
    if(gameOver == true){
        clearInterval(intervalId);  // it accepts an id
        ctx.fillStyle = 'red';
        ctx.font = '50px monospace'
        ctx.fillText('Game Over !!', 350, 300);
        return;
    }

    ctx.clearRect(0,0,boradWidth,boardHeight)
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0],cell[1],cellsize,cellsize);
        ctx.strokeStyle = 'orange';
        ctx.strokeRect(cell[0],cell[1],cellsize,cellsize);
    }

    // draw food 
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'orange';
    ctx.fillRect(foodCells[0],foodCells[1],cellsize,cellsize);
    ctx.strokeRect(foodCells[0],foodCells[1],cellsize,cellsize);

    // draw score
    ctx.fillStyle = 'rgba(115, 148, 38)'
    ctx.font = '25px monoscope';
    ctx.fillText(`SCORE: ${score}`,30,30)
}



// function to update snake
function update(){
    headX = snakeCells[snakeCells.length-1][0];
    headY = snakeCells[snakeCells.length-1][1];

    let newHeadX;
    let newHeadY;

    if(direction=='right'){
        newHeadX = headX + cellsize;
        newHeadY = headY
        if(newHeadX == boradWidth || khagayakhudko(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    else if(direction=='left'){
        newHeadX = headX - cellsize;
        newHeadY = headY;
        if(newHeadX<0 || khagayakhudko(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    else if(direction == 'up'){
        newHeadX = headX;
        newHeadY = headY - cellsize
        if(newHeadY<0 || khagayakhudko(newHeadX,newHeadY)){
            gameOver = true;
        }
    }

    else{
        newHeadX = headX;
        newHeadY = headY + cellsize
        if(newHeadY == boardHeight || khagayakhudko(newHeadX,newHeadY)){
            gameOver = true;
        }
    }

    snakeCells.push([newHeadX,newHeadY]);

    if(newHeadX == foodCells[0] && newHeadY == foodCells[1]){
        foodCells = generatefood();
        score+=10;
    }
    else{
        snakeCells.shift();
    }
    
}

function generatefood(){
    return [
        Math.round((Math.random()*(boradWidth-cellsize))/cellsize)*cellsize,
        Math.round((Math.random()*(boardHeight-cellsize))/cellsize)*cellsize,
    ]
}


function khagayakhudko(newHeadX,newHeadY){
    for(let item of snakeCells){
        if(item[0] == newHeadX && item[1]==newHeadY){
            return true;
        }
        return false;
    }
}









