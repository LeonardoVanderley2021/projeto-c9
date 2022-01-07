var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
}

function draw() {
  background('lightgrey');

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
    background('black');
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;
    background('white');
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5;
    background('green');
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5;
    background('purple');
  }

  drawSprites();

}




