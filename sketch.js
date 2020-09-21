var moving,fixed;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  fixed.shapeColor="blue";
  moving.shapeColor="blue";
  moving.debug=true;
  fixed.debug=true;
  fixed.velocityX=-3; 
  moving.velocityX=3;

}

function draw() {
  background(0);  
  drawSprites();
 // moving.x=mouseX;
  //moving.y=mouseY;
if (  isTouching(moving,fixed)){
    fixed.shapeColor="yellow";
    moving.shapeColor="yellow";
}
else{
    fixed.shapeColor="blue";
  moving.shapeColor="blue";
}
    
 bounceOff(moving,fixed);
}
