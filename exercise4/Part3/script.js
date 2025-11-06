let p1; // Particle
let p2; // Box
let p3; // Triangle
let stars = []; // 一组 FallingStar

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(250, 250); 
  p2 = new Box(250, 250);      
  p3 = new Triangle(100, 100); 

  //  50  fallinstar.
  for (let i = 0; i < 50; i++) {
    stars.push(new FallingStar(random(width), random(-50, height)));
  }
}

function draw() {
  background(0); // background black.

  // update stars
  for (let star of stars) {
    star.update();
    star.show();
  }

  // update other shape movement.
  p1.update();
  p1.show();

  p2.update();
  p2.show();

  p3.update();
  p3.show();
}