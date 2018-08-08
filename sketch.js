var fireflies = [];
var drawRange = false;
var range = 150;
var clockLength = 100;
var population = 400;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i = 0; i < population; i++){
    fireflies.push(new Firefly)
  }
}

function draw() {
  background(0);
  for(var i = 0; i < fireflies.length;i++){
    fireflies[i].update();
    fireflies[i].draw();
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  fireflies = [];
  setup();
}
