// Project Title
// MObashira Naba
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let rows = 5;
let cols = 5;
let board=[];
let tiles=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
 

}

function draw() {
  background(220);
  drawgrid();

}

function   drawgrid(){
  let colSize = width/cols;
  let rowSize = height/rows;

  for (let x = 0; x < cols; x++){
    for (let y = 0; y < rows; y++){
      rect(x*colSize, y*rowSize,colSize,rowSize);
    }
  }

}
