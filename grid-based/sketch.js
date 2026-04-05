// Grid Based
// MObashira Naba
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Tile {
  constructor(index, img) {
    this.index = index;
    this.img = img;
  }
}

let screen = 0;
let button;
let button2;
let tiles = [];    // The pieces
let rows = 4;
let cols = 4;
let grid = [];
let h;
let w;
const CELL_SIZE = 105;

function preload(){
  source = loadImage("cheetah.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width/ cols;
  h = height/rows;
  for(let i = 0; i < rows ; i++){
    for (let j = 0; j< cols; j++){
      let x = i*w;
      let y = j*h;
      let img = createImg(w,h);
      img.copy(source,x,y,w,h,0,0,w,h);
      let index = i+j*cols;
      grid.push(index)
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }

  
  button = createButton('Puzzle');
  button.position(width/2 - 50, height/2);
  button.mousePressed(startPuzzle);

  button2 = createButton('Tic tac Toe');
  button2.position(width/2 + 10, height/2);
  button2.mousePressed(startTicTacToe);



}

function draw() {
  // background(220);
  if (screen === 0){
    drawMenu();
  }
  else if (screen ===1 ){
    drawGame();
  }
  else if (screen === 2){
    drawTicTacToe();
  }

}

function drawMenu(){
  background(200);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text('Main', width/2+30, height/2-50);
  button.show();
  button2.show();
}
function drawGame() {
  background(100);
  button.hide();
  button2.hide();
  displayGrid();

  }

  function drawTicTacToe(){
    background(50);
    button.hide();
    button2.hide();
    fill(255);
    // TicTaeToe logic
  }
  
function displayGrid(){
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let index = i + j* cols;
      let x = i*w;
      let y = j*h;
      let tileIndex = grid[index]
      let img = tiles[tileIndex];
      image(img,x,y);
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}
function startPuzzle() {
  screen = 1;
}
function startTicTacToe(){
  screen = 2;
}
