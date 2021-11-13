var player, playerImg;
var alien, alien1Img, alien2Img, alien3Img;
var bgImg, bg;

function preload() {
playerImg = loadImage("images/fp2.png");
alien1Img = loadImage("images/alien1.png");
alien2Img = loadImage("images/alien2.png");
alien3Img = loadImage("images/alien3.png");
bgImg = loadImage("images/bg1.gif");
}

function setup() {
  
 
  player= createSprite(displayWidth/2, displayHeight-250);
  player.addImage(playerImg);
  player.scale=0.5;
  alien= createSprite(displayWidth/2, 100);
  alien.addImage(alien1Img);


 
  
}

function draw() {
  background(bgImg);

if (keyWentDown (RIGHT_ARROW)) {
  player.velocityX = 6;
}

if (keyWentDown (LEFT_ARROW)) {
  player.velocityX = -6;
}

if (keyWentUp (RIGHT_ARROW)) {
  player.velocityX = 0;
}

if (keyWentUp (LEFT_ARROW)) {
  player.velocityX = 0;
}

if (keyWentDown (DOWN_ARROW)) {
  player.velocityY = 6;
}

if (keyWentDown (UP_ARROW)) {
  player.velocityY = -6;
}

if (keyWentUp (UP_ARROW)) {
  player.velocityY = 0;
}

if (keyWentUp (DOWN_ARROW)) {
  player.velocityY = 0;
}







  drawSprites();

 
  
}

