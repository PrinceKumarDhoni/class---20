var movingRect, fixedRect;

function setup() {
  createCanvas(600, 600);

  movingRect = createSprite(100, 100, 80, 60);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  fixedRect = createSprite(300, 300, 40, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
}

function draw() {
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}