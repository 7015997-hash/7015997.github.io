// Arrays and Object notation
// Mobashira Hossain
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rows=40 ;
let colums=40;
let colSize;
let rowSize;
let marginRight = 100;





function setup() {
  createCanvas(windowWidth,windowHeight);

  colSize = width/colums;
  rowSize = height/rows;
}

function draw() {
  background(220);
  for (let i=0; i < colums; i++){
    for (let j = 0; j<rows; j++){
      rect(i*colSize, j*rowSize,colSize,rowSize);
    }
  
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);


}