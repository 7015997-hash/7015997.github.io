// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let img;
let imgShooter;
let bullets = [];
let enemies = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }
  
}
function preload() {
  img = loadImage("Pixel art bg.jpg");
  imgShooter = loadImage("charac.png");
}

function draw() {
  image(img, 0, 0, width, height);
  // background(240, 182, 193);
  rectMode(CENTER);
  drawShooter();
  bullet();
  enemy();
  
}

//   shooter
// function preload() {
//  
 

// }
function drawShooter() {
  fill("red");
  noStroke();
  // rect(mouseX, height - 50, 20, 20);
  image(imgShooter ,mouseX, height - 50, 20, 20);
}
function enemy() {
  for (let enemy of enemies) {
    fill("black");
    enemy.y += 2;
    rect(enemyX, enemy, 10);
  }
}

for (let enemy of enemies) {
  for (let bullet of bullets) {
    if (dist(enemy, enemy, bullet.x, bullet.y) < 10) {
    
      
    }
  }
}
function bullet() {
  stroke("black");
  fill("white");
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
