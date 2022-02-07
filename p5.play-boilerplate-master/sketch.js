
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  hr= hour();
  mn= mintue();
  sc= second();

   translate(200,200);
   rotate(-90);

   scAngle= map(sc,0,60,0,360);
   mnAngle= map(mn,0,60,0,360);
   hrAngle= map(hr % 12,0,12,0,360);

   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();
   
  drawSprites();
}