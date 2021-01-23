var movingrect,fixedrect;
var gameObject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  
  

  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(istouching(movingrect,gameobject3)){
    movingrect.shapeColor="red";
    gameobject3.shapeColor="red";
   
  }else{
    movingrect.shapeColor="green";
    gameobject3.shapeColor="green";
  }
 
  drawSprites();
}
