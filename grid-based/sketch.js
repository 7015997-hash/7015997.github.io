// Grid Based
// Mobashira Naba
// Date
//
// Extra for Experts:
// Used "class" to break the pieces from the main image before doing it in the class

// Class 
class Tile {
  constructor(index, img) {
    this.index = index;
    this.img = img;
  }
}
let source;
let screen = 0;
let button;
let tiles = [];    // The pieces
let rows = 4;
let cols = 4;
let board = [];
let h;
let w;
let img;


function preload(){
  source = loadImage("cheetah.png");

}

function setup() {
  createCanvas(900, 900);
  w = width/ cols;
  h = height/rows;
  //  breaking tiles
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
  //  remove the last tile
  tiles.pop();
  board[cols-1].pop();
  board[cols-1].push(-1);

  

  
  function shuffling(){
    let tempBoard = [];
    for(let i = 0; i < cols; i++){

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
  button.position(width/2 , height/2);
  button.mousePressed(startPuzzle);

  
}
// chaging screen
function draw() {
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

}
function drawGame() {
  background(100);
  button.hide();

  displayGrid();

}


// grid
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

      

      strokeWeight(2);
      noFill();
      rect(x,y,w,h);

    
    }
  }
}


//  shuffle pieces
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

// Get into the puzzle piece
function startPuzzle() {
  screen = 1;
}

