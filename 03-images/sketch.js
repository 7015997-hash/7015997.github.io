// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let download;
function preload (){
  download = loadImage("download.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(download, mouseX, mouseY,download.width * 0.5,download.height * 0.5)
}
