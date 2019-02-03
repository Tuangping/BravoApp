let img;
function preload() {
  img = loadImage('map.png');
}
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
cnv.style('display', 'block');
//background(255, 0, 200);
image(img,0,0);
}

function draw() {
  //background(220);
  image(img,0,0);
  fill(255,0,0);
  rect(30,30,100,100);
  fill("BLACK");
  text("This is Bravo App. and we will connect it to Sqaure.",30,200);
  text("Also, testing fullscreen right now. No scrollbar",30,220);
  text("fullscreen 3", innerWidth/2,innerHeight/2);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
