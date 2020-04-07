let posX = [0];
let posY = [0];
let coinX;
let coinY;
let coin = false;
let t = false;
let score = 0;
let growing = false;
let tracker = [0]
let gameIsOver = false
let dir = 0

function setup() {
  createCanvas(500, 500);
  makeCoin();
  makeGame(posX[0], posY[0]);
  setInterval(moveSnake,1000)
}

function draw() {

  if (gameIsOver == false) {
    makeGame(posX[0], posY[0])
    gameOver()
    changeDir()
    if ((posX[0] == coinX) && (posY[0] == coinY)) {
      makeCoin()
      score++;
    }
  } else {
    fill(255)
    rect(0,0,500,500)
    fill(0)
    text('Game Over', 30, 20)
    text('Score: ' + score, 30, 30)
  }
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
 *This functions insures that when a button is pressed, the 
 *snake only moves once.
 *This will likely havely to be changed as the final version 
 *will require different movement.
 */
function moveSnake() {
  if ((dir == 3)) {
    moveDown();
  }
  if ((dir == 2)) {
    moveLeft();
  }
  if ((dir == 1)) {
    moveUp();
  }
  if ((dir == 0 )) {
    moveRight();
  }

}
function changeDir() {
  if ((keyIsPressed == true) && ((key == 's') || (key == 'S'))) {
    dir = 3
  }
  if ((keyIsPressed == true) && ((key == 'a') || (key == 'A'))) {
    dir = 2
  }
  if ((keyIsPressed == true) && ((key == 'w') || (key == 'W'))) {
    dir = 1
  }
  if ((keyIsPressed == true) && ((key == 'd') || (key == 'D'))) {
    dir = 0
  }
}

function makeGame(x, y) {
  clear()
  makeGrid()
  fill(0)
  makeSnake()
  console.log('x: ' + posX[tracker[tracker.length - 1]])
  console.log('tracker: ' + tracker[tracker.length - 1])
  console.log('tracker length: ' + tracker.length)
  fill(100, 255, 100)
  rect(50 * coinX, 50 * coinY, 50, 50)
  fill(0)
  rect(0, 0, 50, 10)
  fill(255)
  text('score: ' + score, 5, 10);
}
/**
 *Moves snake up
 */
function moveUp() {
  if (posX.length - 1 != score) {
    grow()
    snake()
    posY[0] = posY[0] - 1;
  } else if (posY[0] >= 1) {
    snake()
    posY[0] = posY[0] - 1;
  }

}
/**
 *Moves snake down
 */
function moveDown() {
  if (posX.length - 1 != score) {
    grow()
    snake()
    posY[0] = posY[0] + 1;
  } else if (posY[0] <= 8) {
    snake()
    posY[0] = posY[0] + 1;
  }
}
/**
 *Moves snake left
 */
function moveLeft() {
  if (posX.length - 1 != score) {
    grow()
    snake()
    posX[0] = posX[0] - 1;
  } else if (posX[0] >= 1) {
    snake()
    posX[0] = posX[0] - 1;
  }
}
/**
 *Moves snake right
 */
function moveRight() {
  if (posX.length - 1 != score) {
    grow()
    snake()
    posX[0] = posX[0] + 1;
  } else if (posX[0] <= 8) {
    snake()
    posX[0] = posX[0] + 1;
  }

}
/**
 *Creates the coin, makes a random location
 */
function makeCoin() {
  fill(100, 244, 244)
  var done = false
  var tempX;
  var tempY;
  while (!done) {
    var i;
    tempX = getRandomInt(10);
    tempY = getRandomInt(10);
    for (i = 0; i < posX.length; i++) {
      if ((tempX == posX[i]) && (tempY == posY[i])) {
        done = false;
        break;
      }
      done = true;
    }
  }
  coinX = tempX
  coinY = tempY
  coin = true;
}
/**
 *Creates a random Integer value. Values will range from zero *to one less than the value
 *entered.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
/**
 *creates all the blocks for the snake
 */
function makeSnake() {
  var i;
  for (i = 0; i < posX.length; i++) {
    rect(posX[i] * 50, posY[i] * 50, 50, 50)
  }
}
/**
adds a new block at the tail of the snake
*/
function grow() {
  posX.push(posX[posX.length - 1])
  posY.push(posY[posY.length - 1])
  growing = true
}
/**
 *This moves the last index to the location of the head,
 *and then find the new tail to continue
 */
function snake() {
  if (growing == true) {
    tracker.push(posX.length - 1)
    posX[tracker[tracker.length - 1]] = posX[0]
    posY[tracker[tracker.length - 1]] = posY[0]
    tracker.shift()
    tracker.unshift(tracker.pop());
    tracker.unshift(0);

    growing = false
  } else if (tracker.length > 1) {
    posX[tracker[tracker.length - 1]] = posX[0]
    posY[tracker[tracker.length - 1]] = posY[0]
    tracker.shift()
    tracker.unshift(tracker.pop());
    tracker.unshift(0);
  }

}

function gameOver() {
  var i;
  for (i = 1; i < posX.length; i++) {
    if ((posX[0] == posX[i]) && (posY[0] == posY[i])) {
      gameIsOver = true;
    }
  }
}