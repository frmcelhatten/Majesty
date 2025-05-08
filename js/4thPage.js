let displayedText = '';
let fullText = "Someday I'm Gonna Make Her Mine.";
let typeIndex = 0;
let heartAlpha = 0;
let spacePressed = false;
let typingStarted = false;
function setup() {
  createCanvas(1425,650);
  textFont('Georgia');
}
function draw() {
  background(174, 227, 190);
  fill(50);
  textSize(36);
  textAlign(CENTER, TOP);
  text("Her Majesty is a Pretty Nice Girl", width / 2, 20);
  drawHeart(width / 2, height / 2, 100);
  fill(50);
  textAlign(CENTER, BOTTOM);
  text(displayedText, width / 2, height - 20);
  if (!spacePressed || !typingStarted) {
    fill(100);
    textSize(16);
    textAlign(CENTER);
    text("Press SPACE to show the heart, press '8' to type the message", width / 2, height - 80);
  }
}
function drawHeart(x, y, size) {
  push();
  translate(x, y);
  scale(size / 100);
  if (heartAlpha > 0) {
    fill(200, 0, 0, heartAlpha);
    noStroke();
    beginShape();
    vertex(0, -30);
    bezierVertex(-50, -60, -50, 20, 0, 40);
    bezierVertex(50, 20, 50, -60, 0, -30);
    endShape(CLOSE);
  }
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(0, -30);
  bezierVertex(-50, -60, -50, 20, 0, 40);
  bezierVertex(50, 20, 50, -60, 0, -30);
  endShape(CLOSE);
  pop();
}
function keyPressed() {
  if (key === ' ') {
    spacePressed = true;
    heartAlpha = min(heartAlpha + 20, 255);
  }
  if (key === '8' && typeIndex < fullText.length) {
    typingStarted = true;
    displayedText += fullText.charAt(typeIndex);
    typeIndex++;
  }
}