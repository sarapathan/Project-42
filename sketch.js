var iss,spaceCraft;
var bg,issImg,scImg;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  scImg1 = loadImage("spaceCraft1.png");
  scImg2 = loadImage("spaceCraft2.png");
  scImg3 = loadImage("spaceCraft3.png");
  scImg4 = loadImage("spaceCraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300,130);
  iss.addImage(issImg);
  iss.scale = 0.25;
  
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(scImg1);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(bg);  
  drawSprites();
  if (!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);

    if (keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y - 2;
    }
    if (keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x - 2;
      spaceCraft.addImage(scImg4);
    }
    if (keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x + 2;
      spaceCraft.addImage(scImg3);
    }
    if (keyDown("DOWN_ARROW")){
      spaceCraft.y = spaceCraft.y + 2;
      spaceCraft.addImage(scImg2);
    }
  }
  if (spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }
  
}