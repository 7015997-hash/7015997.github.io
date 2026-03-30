// Grid Based
// MObashira Naba
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let screen = 0;
let button;
let button2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Puzzle');
  button.position(width/2, height/2);
  button.mousePressed(startGame);

  button2 = createButton('Tic tae Toe');
  button2.position(width/2, height/5);
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

  function drawMenu(){
    background(200);
    textAlign(CENTER);
    textSize(30);
    fill(255);
    text('MAin', width/2, height/3);
    button.show();
    button2.show();
  }
  function drawGame() {
    button.hide();
    button2.hide();
    background(50, 150, 50);
    text('Game Screen', width/2, height/2);
  }

  function startGame() {
    screen = 1;
  }

}