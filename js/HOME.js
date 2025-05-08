let showBottomText = false;
let showJewels = false;
let bottomTextAlpha = 0;
let bottomTextY;
function setup() {
  createCanvas(1425,650);
  background(242, 222, 225);
  textFont("Georgia");
  bottomTextY = height + 20;
}
function draw() {
  background(242, 222, 225);
  if (!showJewels) {
    fill(100);
    textSize(16);
    text("Click the Crown", width / 2 - 100, height - 30);
  }
  fill(50);
  textSize(36);
  textAlign(LEFT, TOP);
  text("Her Majesty is a Pretty Nice Girl", 20, 20);
  if (showBottomText) {
    if (bottomTextAlpha < 255) bottomTextAlpha += 5;
    if (bottomTextY > height - 40) bottomTextY -= 2;

    fill(50, bottomTextAlpha);
    textAlign(RIGHT, BOTTOM);
    text("But She Doesn't Have a Lot to Say", width - 20, bottomTextY);
  }
  drawCrown(width / 2, height / 2);
  if (showJewels) drawJewels(width / 2, height / 2);
}
function drawCrown(x, y) {
  fill(255, 215, 0);
  noStroke();
  beginShape();
  vertex(x - 60, y + 30);
  vertex(x - 40, y - 20);
  vertex(x - 20, y + 10);
  vertex(x, y - 30);
  vertex(x + 20, y + 10);
  vertex(x + 40, y - 20);
  vertex(x + 60, y + 30);
  endShape(CLOSE);
  rect(x - 60, y + 30, 120, 20);
}
function drawJewels(x, y) {
  fill(200, 0, 0);
  ellipse(x - 40, y + 10, 10, 10);
  ellipse(x + 40, y + 10, 10, 10);
  ellipse(x, y - 10, 10, 10);
}
function mousePressed() {
  showBottomText = true;
  if (
    mouseX > width / 2 - 60 &&
    mouseX < width / 2 + 60 &&
    mouseY > height / 2 - 30 &&
    mouseY < height / 2 + 50
  ) {
    showJewels = true;
  }
}
