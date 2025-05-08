let showBottomText = false;
let textY;
let dragStart = null;
let headDarkness = 0;
function setup() {
  createCanvas(1425,650);
  background(200, 220, 237);
  textFont('Georgia');
  textY = height + 50;
}
function draw() {
  background(200, 220, 237);
  fill(100);
  textSize(16);
  if (headDarkness < 10) {
  text("Click and Drag Down", width / 2 - 100, height - 30);
}
  fill(50);
  textSize(36);
  textAlign(RIGHT, TOP);
  text("Her Majesty is a Pretty Nice Girl", width - 20, 20);
  if (showBottomText && textY > height - 60) {
    textY -= 2;
  }
  if (showBottomText) {
    textAlign(LEFT, BOTTOM);
    text("But She Changes from Day to Day", 20, textY);
  }
  drawSilhouette(width / 2, height / 2, headDarkness);
}
function drawSilhouette(x, y, d) {
  let dark = constrain(d, 0, 255);
  fill(255 - dark);
  noStroke();
  ellipse(x, y - 50, 60);
  rect(x - 30, y - 20, 60, 80, 20);
}
function mousePressed() {
  showBottomText = true;
  if (dist(mouseX, mouseY, width / 2, height / 2 - 50) < 30) {
    dragStart = mouseY;
  }
}
function mouseDragged() {
  if (dragStart !== null) {
    let dragAmount = mouseY - dragStart;
    headDarkness = map(dragAmount, 0, 200, 0, 255);
  }
}
function mouseReleased() {
  dragStart = null;
}