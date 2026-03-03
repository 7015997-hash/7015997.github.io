// PingPong Ball
// Mobashira Hossain Naba
// March 3rd 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y = 200;
let dx = 4;
let dy = 3;
let batW = 100;
let batH = 10;
let batY = 350;
let counter = 0;
let bgMusic;

function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
  for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
  }
  
}
// Background Image changing.
function preload() {
 img = loadImage("Pixel art bg.jpg");
 bgMusic = loadSound("bgMusic.mp3");

}


function draw(){
  background(200);
  text("Score:",15,40)
  textSize(15);
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
  }
  // Detetion collision...
  if ((x >= mouseX && x <= mouseX+ batW)&& (y + 12.5 >= batY)){
    x *= -1;
    y *= -1;
    x *= -1;
    x *= -1;
    counter += 1;

  }
  // when clicked bg changes.
  function keyPressed(){
  if (key === "a"){
  image(img, 0, 0, width, height);
 }
}
} 

