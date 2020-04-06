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
/**
*Creates the grid that is used for the backgroup
*/
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
/**
*This functions insures that when a button is pressed, the *snake only moves once.
*This will likely havely to be changed as the final version *will require different movement.
*/
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
/**
*Moves snake up
*/
function moveUp() {
  if (posY >= 1) {
    posY = posY - 1;
  }
}
/**
*Moves snake down
*/
function moveDown() {
  if (posY <= 8) {
    posY = posY + 1;
  }
}
/**
*Moves snake left
*/
function moveLeft() {
  if (posX >= 1) {
    posX = posX - 1;
  }
}
/**
*Moves snake right
*/
function moveRight() {
  if (posX <= 8) {
    posX = posX + 1;
  }
}
/**
*This ensures that when the key is released, the user will be *able to move once again.
*/
function keyReleased() {
  console.log(t)
  t = false;
  console.log(t)
}
/**
*Creates the coin, makes a random location
*/
function makeCoin() {
  fill(100, 244, 244)
  coinX = getRandomInt(10);
  coinY = getRandomInt(10);
  coin = true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}