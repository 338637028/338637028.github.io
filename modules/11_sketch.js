//define variables
let frog = [];
let frog2;
let frog3;
let scene = 0;
let t = 0;

//set up program
function setup() {
  var canvas = createCanvas(400,400);
  canvas.parent('sketch-holder');

  for (let i = 0; i < 100; i++) {
    frog.push(new circle(random(400), random(400)));
  }

  frog2 = new square(random(400), random(400));

  frog3 = new spin(0.02);

  noStroke();
}
//draw art show
function draw() {


//set scene based on `scene` variable, changed by mouse clicks.
  if (scene % 5 == 0) {
    open();
  } else if (scene % 5 == 1) {
    art1();
  } else if (scene % 5 == 2) {
    art2();
  } else if (scene % 5 == 3) {
    art3();
  } else {
    close();
  }
}

//change scene on mouse click
function mouseClicked() {
  scene++;
}
//define scenes
function open() {
  background(31,31,31);
  fill(255, 255, 255);
  textSize(50);
  text("Welcome", 100, 50);
  textSize(20);
  text("Welcome to the art show", 150, 150);
  text("Click to check out the art", 10, 300);
}
function art1() {
  background(119, 221, 119);
  for (let i = 0; i < frog.length; i++) {
    frog[i].show();
  }
  fill(000000);
  textSize(10);
  text("(try moving your cursor)",0,390);
}
function art2() {
  background(119, 206, 225);

  frog2.show();

}
function art3() {
  background(255, 192, 203);
  frog3.show();
}
function close() {
  background(255, 255, 255);
  textSize(30);
  text("Thanks for watching!", 50, 200);
  text(":)",180,250);
}
