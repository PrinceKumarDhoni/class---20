var movingRect, fixedRect;

function setup() {
  createCanvas(600, 600);

  movingRect = createSprite(100, 100, 80, 60);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  movingRect.velocityX = 5;

  fixedRect = createSprite(500, 100, 40, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0);

  

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 ) {
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);
  }

  drawSprites();
}