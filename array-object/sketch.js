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
let board =[];
let marginRight = 100;
const SHAPES = [
  [[0,1],[1,1],[2,1],[3,1]], // I
  [[0,0],[1,0],[0,1],[1,1]], // O
  [[1,0],[0,1],[1,1],[2,1]]  // T
];




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