var car,wall;
var weight,speed;
var deformation;

function setup() {

  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(600, 200, 20,70);
  weight = random(400,1500);
  speed = random(55,90);
}

function draw() {
  background(255,255,255);  

  car.velocityX=speed;
  if(isTouching(wall,car)){

     deformation = (0.5 * weight * speed * speed)/22500;

     if(deformation<100){

      car.shapeColor="green";
      stop();
     }
     if(deformation>100 && deformation<180){

      car.shapeColor="orange";
      stop();
     }
     if(deformation>180){

      car.shapeColor="red";
      stop();
     }
    
  }
  drawSprites();
}
function isTouching(fixed,moving){


  if (moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2
    && fixed.y - moving.y < fixed.height/2 + moving.height/2) {
  return true;
}
else {
  return false;
}




}
function stop(){

   car.velocityX=0;

}