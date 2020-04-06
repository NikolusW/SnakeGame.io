let posX = 0;
let posY = 0;
let coinX;
let coinY;
let coin = false;
let t = false;
let score = 0;

function setup() {
  createCanvas(500, 500);
  makeCoin();
  makeGame(posX, posY);
}

function draw() {
  makeGame(posX, posY)
  if (t == false) {
    moveSnake();
  }
  if ((posX == coinX) && (posY == coinY)) {
    makeCoin()
    score++;
  }
  text('score: ' + score, 10, 10);
}

function makeGrid() {
  var i;
  fill(255)
  for (i = 0; i < 10; i++) {
    rect(50 * i, 0, 50, 50)
    var j;
    for (j = 0; j < 10; j++) {
      rect(i * 50, j * 50, 50, 50)
    }
  }
}

function moveSnake() {
  if ((keyIsPressed == true) && ((key == 's') || (key == 'S'))) {
    moveDown();
    t = true
  }
  if ((keyIsPressed == true) && ((key == 'a') || (key == 'A'))) {
    moveLeft();
    t = true
  }
  if ((keyIsPressed == true) && ((key == 'w') || (key == 'W'))) {
    moveUp();
    t = true
  }
  if ((keyIsPressed == true) && ((key == 'd') || (key == 'D'))) {
    moveRight();
    t = true
  }

}

function makeGame(x, y) {
  clear()
  makeGrid()
  fill(0)
  rect(50 * x, 50 * y, 50, 50)
  fill(100, 255, 100)
  rect(50 * coinX, 50 * coinY, 50, 50)
}

function moveUp() {
  if (posY >= 1) {
    posY = posY - 1;
  }
}

function moveDown() {
  if (posY <= 8) {
    posY = posY + 1;
  }
}

function moveLeft() {
  if (posX >= 1) {
    posX = posX - 1;
  }
}

function moveRight() {
  if (posX <= 8) {
    posX = posX + 1;
  }
}

function keyReleased() {
  console.log(t)
  t = false;
  console.log(t)
}

function makeCoin() {
  fill(100, 244, 244)
  coinX = getRandomInt(10);
  coinY = getRandomInt(10);
  rect(50 * coinX, 50 * coinY, 50, 50);
  coin = true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}