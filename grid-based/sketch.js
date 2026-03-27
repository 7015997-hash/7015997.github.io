// Project Title
// MObashira Naba
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let rows = 5;
let cols = 5;
let board=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawgrid();
  makeResize();

}

function   drawgrid(){
  let colSize = width/cols;
  let rowSize = height/rows;

  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      rect(i*colSize, j*rowSize,colSize,rowSize);


    }


  }
  function makeResize(){
    resizeCanvas(windowWidth,windowHeight);
  }



}
