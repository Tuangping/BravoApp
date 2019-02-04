let img;

function preload() {
  img = loadImage('data/image/map_2.png');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
 cnv.style('display','inline-block');
}
function draw() {
 image(img, 0, 0, windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
