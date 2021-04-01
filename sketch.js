function setup() {
  createCanvas(400,400);
  a=createSprite(100, 200, 50, 50);
  a.shapeColor = "red";
  a.debug = true
  b=createSprite(340, 200, 50, 50);
  b.shapeColor = "red";
  b.debug = true
}

function draw() {
  background(0);  
                           
if (a.x-b.x<= a.width/+b.width/2 &&
  b.x-a.x<= b.width/2+a.width/2 &&
  a.y-b.y<= a.height/2+b.height/2 && 
  b.y-a.y<= b.height/2+a.height/2
) {
a.shapeColor = "cyan"  
b.shapeColor = "cyan"
} else {
  a.shapeColor = "yellow"
  b.shapeColor = "yellow"    
}





  b.x = mouseX;
 b.y = mouseY;

  drawSprites();
}