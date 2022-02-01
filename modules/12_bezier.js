function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder2');
}

function draw() {
  background(0);
  
  //control points
  stroke(255);
  strokeWeight(24);
  /*
  point(0,300);
  point(100,100);
  point(400,400);
  point(600,300); */
  
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0,300);
  //vertex(600,300);
  bezierVertex(mouseX,mouseY,400,400,600,300);
  bezierVertex(400,600,200,100,0,300)
  endShape();
  
  //bezier curve
  /*
  strokeWeight(4);
  noFill();
  bezier(0,300,100,100,400,400,600,300)
  
  //lines
  line(0,300,100,100);
  line(400,400,600,300); */
}