// Grid Based
// MObashira Naba
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let screen = 0;
let button;
let button2;
let rows = 10;
let cols = 10;
let grid = [];
const CELL_SIZE = 40;

function setup() {
  for(let y = 0; y < rows ; y++){
    grid[y] = [];
    for (let x = 0; x< cols; x++){
      grid[y][x]=0;
    }
  }

  createCanvas(windowWidth, windowHeight);
  button = createButton('Puzzle');
  button.position(width/2 - 50, height/2);
  button.mousePressed(startGame);

  button2 = createButton('Tic tac Toe');
  button2.position(width/2 + 10, height/2);
  button2.mousePressed(startGame);



}

function draw() {
  // background(220);
  if (screen === 0){
    drawMenu();
  }
  else if (screen ===1 ){
    drawGame();
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
function displayGrid(){
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
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
function startGame() {
  screen = 1;
}

