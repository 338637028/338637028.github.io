//function for drawing and changing color/shape of circles for slide 2
class circle {
  constructor(nx, ny) {
    this.x = nx;
    this.y = ny;
  }

  show() {
    fill(random(255), random(255), random(255));
    ellipse(
      (this.x + (mouseX % this.x)) * 0.75,
      (this.y + (mouseY % this.y)) * 0.75,
      random(50),
      random(50)
    );
  }
}

//function for drawing vibrating square for slide 3
class square {
  constructor(nx, ny) {
    this.x = nx;
    this.y = ny;
  }

  show() {
    fill(random(200, 255), random(200, 255), random(200, 255));
    rect(mouseX * random(0.1, 0.5), mouseY * random(0.75, 0.9), 100, 100);
  }
}

//draw spinning shapes for slide 4
class spin {
  constructor(a) {
    this.aa = a;
    this.b = 0;
  }

  show() {
    this.b += this.aa;
    translate(200, 200);
    rotate(this.b);
    fill(255, 255, 255);
    rect(0, 0, 300, 300);
    fill(0, 0, 0);
    rect(-300, -300, 300, 300);
  }
}
