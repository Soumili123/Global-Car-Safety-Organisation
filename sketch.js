var car, wall;
var speed,weight;
var deformation;



function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);

  car.velocityX=speed;

  car.shapeColor=("white");

  wall=createSprite(700,200,60,height/2);
  wall.shapeColor=("lightBlue");

}

function draw() {
  background("grey");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
  }

  if(deformation<100){
//good
    car.shapeColor=("lightGreen");
  }

  if(deformation<180 && deformation>100){
   //average
    car.shapeColor=color("yellow");
  }

  if(deformation>180){
   //lethal
    car.shapeColor=color("red");
  }
  drawSprites();
}