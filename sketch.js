
let playerAnime;
let player;

const SPEED = 3;
const TOP = 270;
const RIGHT = 0;
const BOTTOM = 90;
const LEFT = 180;

function preload() {
  playerAnime = loadAnimation("assets/pac0.png", "assets/pac1.png");
}

function setup() {
  const canvas = createCanvas(512, 512);
  canvas.parent("canvas");
  background(0);

  player = createSprite(width / 2, height / 2, 24, 24);
  player.addAnimation("default", playerAnime)
  player.changeAnimation("default");
}

function draw() {
  background(0);
  drawSprites();
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      player.rotation = TOP;
      player.setSpeed(SPEED, TOP);
      break;
    case DOWN_ARROW:
      player.rotation = BOTTOM;
      player.setSpeed(SPEED, BOTTOM);
      break;
    case LEFT_ARROW:
      player.rotation = LEFT;
      player.setSpeed(SPEED, LEFT);
      break;
    case RIGHT_ARROW:
      player.rotation = RIGHT;
      player.setSpeed(SPEED, RIGHT);
      break;
  }
}