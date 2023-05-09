let tileSize = 20;
let numTilesX;
let numTilesY;
let saturationValue;
let brightnessValue;
let maxDistance = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  numTilesX = ceil(width / tileSize);
  numTilesY = ceil(height / tileSize);

  saturationValue = 0;
  brightnessValue = 0;

  background(0);
}

function draw() {
  background(0);

  for (let y = 0; y < numTilesY; y++) {
    for (let x = 0; x < numTilesX; x++) {
      let xPos = x * tileSize;
      let yPos = y * tileSize;

      let distance = dist(mouseX, mouseY, xPos + tileSize / 2, yPos + tileSize / 2);
      let overSize = 1 - distance / maxDistance;
      overSize = constrain(overSize, 0, 1);
      brightnessValue = 100 - (overSize * 50);

      fill(255, saturationValue, brightnessValue);
      rect(xPos, yPos, tileSize, tileSize);
    }
  }

  textSize(200);
  textAlign(CENTER, CENTER);
  let textX = width / 2;
  let textY = height / 2;
  fill(50, 0, 0); // 텍스트 밝기를 고정값 100(밝은 검정색)으로 설정
  text('jungihong10', textX, textY);
}
