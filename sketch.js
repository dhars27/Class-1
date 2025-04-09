var toy;

function setup() {
  createCanvas(1200, 600);
  toy = createSprite(200, 200, 50, 50);
  toy.shapeColor = color("Red"); // Set box color here
}

function draw() {
  background("Purple"); // Dark background

  if (keyIsDown(RIGHT_ARROW)) {
    toy.position.x += 5;
    toy.shapeColor = "Blue";
  }

  if (keyIsDown(LEFT_ARROW)) {
    toy.position.x -= 5;
    toy.shapeColor = "Pink";
  }

  if (keyIsDown(UP_ARROW)) {
    toy.position.y -= 5;
    toy.shapeColor = "Yellow";
  }

  if (keyIsDown(DOWN_ARROW)) {
    toy.position.y += 5;
    toy.shapeColor = "White";
  }

  drawSprites();
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("😊", toy.position.x, toy.position.y); // Cute emoji face

}





