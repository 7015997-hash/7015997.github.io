// Arrays and Object notation
// Mobashira Hossain
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(204,204,0);
//   Buffer canvas create
  cnv1 = createGraphics(width,height);
  cnv1.background(255,255,102);
  cnv1.fill(255,204,229);
  cnv1.circle(250,200,150);
  img = cnv1.get(width-350,height-400,410,350);
  image(img,0,0);
//   all the shapes:
  a1();
  b2();
  c3();
  d4();
  e5();
  cross();
  s();
  s2();
}

function a1(){
  fill(0,153,153);
  square(52,200,50);
  
  fill(0,153,153);
  square(330,200,50);
  
//   fill(255,102,102);
//   rect(60,70,390,10);
  
//   fill(255,204,204);
//   rect(70,58,390,10);
  
//   fill(204,255,255);
//   rect(5,46,390,10);
  
}
function b2(){
  fill(255,204,229,150);
  circle(50,200,50);
  noStroke();
  
  fill(255,204,229,190);
  circle(330,200,50);
  noStroke();
}
function c3(){
  fill(204,255,255,190);
  circle(90,250,50);
}
function d4(){
  fill(204,255,255,150);
  rect(100,100,200,100);
  noStroke();
}
function e5(){
  fill(255,204,204);
  angleMode(DEGREES);
  arc(0,0,80,80,0,90);

  fill(255,255,255);
  angleMode(DEGREES);
  arc(0,399,90,80,270,-360);
  
  fill(255,255,204);
  angleMode(DEGREES);
  arc(350,399,90,80,270,-360); 
  
}
function cross(){
  push();
  translate(height/2,width/2);
  rotate(random(PI*2));
  fill(0,204,204);
  circle(0,0,100);
  canvas.getContext("2d").clip();
  stroke(0,14);
  noFill();
  for (n = 0; n< 500;n++){
    rect(random(-140,140),random(-140,140),70);
  }
  pop();
}
function s(){
  fill(255,255,102);
  stroke(255,153,204);
  beginShape();
  vertex(0,height);
  vertex(0,height-30);
  
  bezierVertex(width*0.3, height-80,width*0.7, height+20, width,height-30);
  vertex(width,height);
  endShape(CLOSE);
  
}
function s2(){
fill(255,255,102);
  stroke(255,153,204);
  beginShape();
  vertex(width, 0);       
  vertex(width - 30, 0);  
  
  // This curve pulls left then pushes back right toward the bottom
  bezierVertex(width - 80, height * 0.3, width + 20, height * 0.7, width - 30, height);
  
  vertex(width, height);  // Bottom-right corner
  endShape(CLOSE);
}







