var fixedRect;
var movingRect
var o1;


function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200,200,50,80);
   movingRect = createSprite(400,200,80,30)
   o1 = createSprite(200,100,50,50);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
o1.shapeColor="green";  
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if(isTouching(fixedRect,movingRect)) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(isTouching(o1,movingRect)) {
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
}

  drawSprites();
}

function isTouching(p1,p2) {
  if (p2.x - p1.x < p1.width/2 + p2.width/2
    && p1.x - p2.x < p1.width/2 + p2.width/2
    && p2.y - p1.y < p1.height/2 + p2.height/2
    && p1.y - p2.y < p1.height/2 + p2.height/2) {
      return true;
}
else {
return false;
}
}



