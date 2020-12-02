var bullet,wall;
var speed, weight;
var thickness;
var damage=0;

function setup() {
  createCanvas(1500,400);

  bullet = createSprite(50, 200, 100, 30);
  bullet.shapeColor="white";
 
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(23,83);

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);


}

function draw() {
  background("cyan");  
  
  

  if(keyDown("space")){
    bullet.velocityX=speed;

  }
if(bullet.isTouching(wall) && damage<10){
  bullet.shapeColor=color(0,255,0);
  bullet.velocityX=0;
  textSize(30);
  text("Damage is :"+damage,200,100);
}
if(bullet.isTouching(wall) && damage>10){
  bullet.shapeColor="red";
  bullet.velocityX=0;
  textSize(30);
  text("Damage is :"+damage,200,100);
}


drawSprites();
}