var ball1, ball2, ball3;
var edges;
function setup() {
  createCanvas(600,600);

  ball1 = createSprite(100,100,20,20);
  ball1.shapeColor = "blue";

  ball2 = createSprite(200,300,20,20);
  ball2.shapeColor = "red";

  ball3 = createSprite(500,100,20,20);
  ball3.shapeColor = "green";

  ball1.velocityX = -6;
  ball1.velocityY = 6;

  ball2.velocityX = -4;
  ball2.velocityY = 2;

  ball3.velocityX = -3;
  ball3.velocityY = 5;

  edges = createEdgeSprites();
}

function draw() {
  background(30);

ball1.bounceOff(edges);
ball2.bounceOff(edges);
ball3.bounceOff(edges);

ball1.bounceOff(ball2);
ball1.bounceOff(ball3);
ball2.bounceOff(ball3);
  
  drawSprites()
}




