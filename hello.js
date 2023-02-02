let canvas = document.querySelector('canvas');

let context = canvas.getContext('2d');
//context.fillStyle = 'pink'
//context.fillRect(100, 100, 400, 400);

// draw path
context.lineWidth = '4'
context.beginPath();

context.rect(100, 100, 400 ,400);
//context.stroke();

// draw circle
context.beginPath();
context.arc(300, 300, 100, 0,Math.PI * 2);
//context.stroke();

// draw list rectangle

const width = 60;
const height = 60;
const gap = 20;
let y, x;
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        y = 100 + (height + gap) * j; 
        x = 100 + (width + gap) * i;
        
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke()
        if(Math.random() > 0.5){
            context.beginPath();
            context.rect( x+8, y+8, width - 16, height - 16 );
            context.stroke();
        }
    }
}
setTimeout(() => {
    document.location.reload();
  }, 600);