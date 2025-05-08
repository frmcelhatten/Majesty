 let showBottomText = false;
let fullOpacity = 255;
let displayedText = '';
let fullText = "But I Gotta Get a Belly Full of Wine";
let typeIndex = 0;
let typing = false;
let lastTypeTime = 0;
function setup() {
  createCanvas(1425,650);
  background(211, 140, 179);
  textFont('Georgia');
}
function draw() {
  background(211, 140, 179);
  fill(100);
  textSize(16);
  if (fullOpacity === 255) {
    text("Click + Spam Space", width / 2 - 80, height - 60);
  }
  fill(50);
  textSize(36);
  textAlign(LEFT, TOP);
  text("I Want to Tell Her", 20, 20); 
  text("That I Love Her a Lot", 20, 60);
  if (typing) {
    if (millis() - lastTypeTime > 50 && typeIndex < fullText.length) {
      displayedText += fullText.charAt(typeIndex);
      typeIndex++;
      lastTypeTime = millis();
    }
  }
  textAlign(RIGHT, BOTTOM);
  text(displayedText, width - 20, height - 20);
  drawWineBottle(width / 2, height / 2);
}
function drawWineBottle(x, y) {
  noStroke();
  fill(100);
  rect(x - 10, y - 80, 20, 20);
  fill(0);
  rect(x - 10, y - 60, 20, 40);
  fill(30, 150, 30); 
  rect(x - 25, y - 20, 50, 100, 10);
  fill(150, 0, 0, fullOpacity);
  rect(x - 25, y + 40, 50, 40, 0, 0, 10, 10);
}
function mousePressed() {
  if (!showBottomText) {
    showBottomText = true;
    typing = true;
  }
}
function keyPressed() {
  if (key === ' ' && fullOpacity > 0) {
    fullOpacity -= 15;
    fullOpacity = max(fullOpacity, 0);
  }
}