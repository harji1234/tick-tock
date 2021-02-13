var hr,mn,sc
var hrAngle,mnAngle,scAngle
function setup() {
  createCanvas(800,600);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  hr= hour();
  mn=minute();
  sc=second();
  translate(350,250)
  rotate(-90)
  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr % 12,0,12,0,360)
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,150,0)
  pop()
  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,120,0)
  pop()
  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,80,0)
  pop()
  stroke(255,0,0)
  noFill()
  strokeWeight(7)
  arc(0,0,400,400,0,scAngle)
  stroke(0,255,0)
  noFill()
  strokeWeight(7)
  arc(0,0,360,360,0,mnAngle)
  stroke(0,0,255)
  noFill()
  strokeWeight(7)
  arc(0,0,320,320,0,hrAngle)
}