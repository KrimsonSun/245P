// Basic class.
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show() {
    stroke(255);//set color
    strokeWeight(25); // width , pixel.
    point(this.x, this.y);
  }
}

//  1: Extend .Box
class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }
  update() {
    super.update();
    this.r += random(-8, 8);
  }
  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

// Extend  2: Triangle (Challenge)
class Triangle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.size = random(10, 20);
    this.angle = 0;
  }
  update() {
    super.update();
    this.angle += 0.05;
  }
  show() {
    strokeWeight(1);
    stroke(255);
    fill(100, 100, 255, 150);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    triangle(0, -this.size, -this.size, this.size, this.size, this.size);
    pop();
  }
}

// 3: FallingStar 
class FallingStar extends Particle {
  constructor(x, y) {
    super(x, y);
    this.vy = random(1, 5);
    this.gravity = 0.1;
    this.len = random(5, 15);
  }
  update() {
    this.vy += this.gravity;
    this.y += this.vy;
    this.x += random(-1, 1);
    if (this.y > height) {
      this.y = random(-20, -10);
      this.x = random(width);
      this.vy = random(1, 5);
    }
  }
  show() {
    stroke(255, 255, 0);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y - this.len);
  }
}