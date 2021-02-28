var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor="cyan";
  movingrect.shapeColor="red";
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
}

function draw() {
  background(255,255,255);  
 movingrect.x=World.mouseX;
   movingrect.y=World.mouseY;
 console.log(movingrect.x);
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2) {
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);

  }



  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 && 
fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){

  movingrect.velocityY=movingrect.velocityY*(-1);
  fixedrect.velocityY=fixedrect.velocityY*(-1);
} 


  drawSprites();
}