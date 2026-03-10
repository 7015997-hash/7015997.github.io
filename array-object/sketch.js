// Arrays and Object notation
// Mobashira Hossain
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let map =[];
let rows=10 ;
let colums= 8;
let colSize;
let rowSize;





function setup() {
  createCanvas(400,400,WEBGL);
  colSize = width/colums;
  rowSize = height/rows;
}

function draw() {
  background(220);
  
    
  orbitControl();// Enable orbiting with the mouse.
  push();
  translate(0,0,0);
  box(50);
  pop(0);
}
