
let canvas = document.querySelector('canvas')

// brush == context
let ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';

ctx.fillRect(100,300,150,100);

ctx.strokeStyle = 'green'
ctx.strokeRect(100,150,200,50)


// path 

ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(100,110);
ctx.lineTo(200,250);
ctx.lineTo(300,150);
ctx.stroke()

// triangle

ctx.beginPath();
ctx.moveTo(100,100)
ctx.lineTo(150,150)
ctx.lineTo(50,150)
ctx.lineTo(100,100)
ctx.closePath();
// ctx.stroke()
ctx.fill()

// drawing text

ctx.font = '28px monospace';
ctx.fillStyle = 'cyan'
ctx.fillText('Deepika',400,450,100)








