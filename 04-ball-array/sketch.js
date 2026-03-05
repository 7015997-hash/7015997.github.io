// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Ball Object Notation Array

let ballArray = [];
let teleport;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);

  for (let ball of ballArray) {
    //move
    ball.x += ball.dx;
    ball.y += ball.dy;
    function teleport() {
      if (ball.x - ball.radius > width){
        ball.x =- ball.radius;
      }
      if (ball.x + ball.radius < 0){

      }
    }
  }



    //display
  fill(ball.r,ball.g,ball.b);
    circle(ball.x, ball.y, ball.radius * 2);
  }


function mousePressed() {
  spawnBall(mouseX,mouseY);
}

function spawnBall(_x,_y) {
  let theBall = {
    x: _x,
    y: _y,
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 40),
    r: random(255),
    g:random(255),
    b:random(255),
  };
  ballArray.push(theBall);

}