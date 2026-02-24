// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let img;
let bullets = [];

function setup() {
  createCanvas(400, 400);
}
function preload() {
  img = loadImage('macro.jpg'); 
}

function draw() {
  image(img, 0, 0,width,height);
  // background(240, 182, 193);
  drawShooter();
  bullet();
  
}
//   shooter

function drawShooter() {
  fill("red");
  noStroke();
  rect(mouseX, height - 50, 20, 20);
}
function bullet() {
  stroke("white");
  fill("black");
  for (let bullet of bullets) {
    circle(bullet.x, bullet.y, 10);
    bullet.y -= 10;
  }
}

function mousePressed() {
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}
