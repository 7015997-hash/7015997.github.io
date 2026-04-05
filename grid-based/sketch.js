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
let source;
let screen = 0;
let button;
let button2;
let tiles = [];    // The pieces
let rows = 4;
let cols = 4;
let board = [];
let h;
let w;
// const CELL_SIZE = 105;

function preload(){
  source = loadImage("cheetah.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width/ cols;
  h = height/rows;

  for(let i = 0; i < cols ; i++){
    board[i]=[];
    for (let j = 0; j< rows; j++){
      
      let x = i*w;
      let y = j*h;
      let img = createImage(floor(w), floor(h));
      img.copy(source,x,y,w,h,0,0,w,h);
      let index = i+j*cols;
      board[i][j] = index;
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }

  tiles.pop();
  board[cols-1].pop();
  board[cols-1].push(-1);

  
    // function swap(i,j,array){
    // let temp = array[i];
    // array[i] = array[j];
    // array[j]= temp;

  
  function shuffling(){
    let tempBoard = [];
    for(let i = 0; i < cols; i++){
      // let r1 = floor(random(0, array.length));
      // let r2 = floor(random(0, array.length));
      // swap(r1,r2,array);
      for(let j = 0; j < rows; j++){
        tempBoard.push(board[i][j]);
    }


  }
  tempBoard = shuffle(tempBoard);
  let counter = 0;
  for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        board[i][j] = tempBoard[counter];
        counter++;
      }
    }
  }
  shuffling();

  
  button = createButton('Puzzle');
  button.position(width/2 - 50, height/2);
  button.mousePressed(startPuzzle);

  button2 = createButton('Tic tac Toe');
  button2.position(width/2 + 10, height/2);
  button2.mousePressed(startTicTacToe);



}

function draw() {
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
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j* cols;
      let x = i*w;
      let y = j*h;
      let tileIndex = board[i][j];
      if(tileIndex > -1){
        let img = tiles[tileIndex].img;
      image(img,x,y,w,h);
      }

      else{
        fill(255);
        rect(x,y,w,h);
      }

      
      // for (let i = 0; i < cols; i++) {
      // for (let j = 0; j < rows; j++) {
      //   let x = i*w;
      //   let y = j*h;
        strokeWeight(2);
        noFill();
        rect(x,y,w,h);

      // if (grid[y][x] === 0) {
      //   fill("white");
      // }
      // else if (grid[y][x] === 1) {
      //   fill("black");
      // }

      // square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function mousePressed(){
  if (screen === 1){
    let i = Math.floor(mouseX/w);
    let j = Math.floor(mouseY/h);

    if (i > 0 && board[i - 1][j] === -1 ){
      swapPieces(i,j,i - 1, j);    
    }
    else if (i < cols -1 && board[i + 1][j] === -1){
      swapPieces(i,j,i+1,j);

    }
    else if(j > 0 && board[i][j-1] === -1){
      swapPieces(i,j,i,j-1);
    }
    else if(j < rows -1 && board[i][j+1] === -1){
      swapPieces(i,j,i,j+1);
  }
}
}
function swapPieces(i1, j1, i2, j2) {
  let temp = board[i1][j1];
  board[i1][j1] = board[i2][j2];
  board[i2][j2] = temp;
}


function startPuzzle() {
  screen = 1;
}
function startTicTacToe(){
  screen = 2;
}

