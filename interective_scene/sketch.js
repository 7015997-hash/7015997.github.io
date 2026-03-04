// PingPong Ball
// Mobashira Hossain Naba
// March 3rd 2026
//
// Extra for Experts:
// added bgMusic

let x = 200;
let y = 200;
let dx = 4;
let dy = 3;
let batW = 100;
let batH = 10;
let batY = 300;
let counter = 0;
let bgMusic;
let img;
let showNewBg = false; 

function setup(){
  createCanvas(400,400);
  background(200);

  rectMode(CENTER);
  for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
  }
  
}
// Background Image changing.
function preload() {
 img = loadImage("macro.jpg");
 bgMusic = loadSound("bgMusic.mp3");

}


function draw(){
  if ( showNewBg === true ){
    background('blue');
  }
  else {
    image(img, 0, 0,width,height);
  }
  textSize(15);
  fill("white");
  text("Score:" + counter,15,40)
  bat();
  drawBall();
}
// The paddle
function bat(){

  fill("black");
  rect(mouseX,batY,batW,batH);

}
// Ball bouncing
function drawBall(){
  fill(200,25,26);
  ellipse(x,y,40);
  noStroke();
  x += dx;
  y += dy;
  if (x > width || x < 0){
    dx =  dx *-1;
  }
  if (y > height || y < 0){
    dy =  dy *-1;
    counter += 1;
  }
  // Detetion collision...
  if (x > mouseX - batW/2 && x< mouseX + batW/2 && y >= batY) {
    dy = dy * -1;
    
  }
  
} 

// when clicked bg music.
function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop(); // Starts the music and keeps it on repeat
  }
}