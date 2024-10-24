function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,220,220);
  
  // roof
  stroke(0);
  fill(100,100,0);
  triangle(75, 150, 327, 152, 200, 40);
  
  // house
  fill(0,255,0);
  rect(75,150,250,250);
  
  // door
  fill(0,180,0);
  rect(150,250, 75,150);
  
  // door knob
  fill(255,255,0);
  noStroke();
  ellipse(160, 330, 10,10);
  
  // sun
  noStroke();
  fill(255,255,0);
  ellipse(60,60,30,30);
}
