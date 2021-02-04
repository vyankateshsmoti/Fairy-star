const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

var fairy,fairyImg;
var star,starImg;
var bk,bkImg;
var starBody;

function preload(){
 fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
 starImg = loadImage("images/star.png");
 bkImg = loadImage("images/starnight.png");

}
function setup(){
  var canvas = createCanvas(600,600);

  bk = createSprite(300,300,100,100);
  bk.addImage("images/starnight.png",bkImg)

  fairy = createSprite(100,460,20,20);
  fairy.addAnimation("fairyFlying",fairyImg);
  fairy.scale = 0.2;

  star = createSprite(480,40,10,10);
  star.addImage("images/star.png",starImg);
  star.scale = 0.25;



engine = Engine.create();
world = engine.world;

starBody = Bodies.circle(480 , 40 ,100  , {restitution:1, isStatic:true});
World.add(world, starBody);

Engine.run(engine);

}
function draw(){
drawSprites();
Engine.update(engine);

if(starBody.position.y>410){
  Matter.Body.setStatic(starBody, true);
}



if(keyDown(RIGHT_ARROW)){
fairy.x = fairy.x + 3;
}
if(keyDown(LEFT_ARROW)){
  fairy.x = fairy.x - 3;
  }
  star.x = starBody.position.x;
  star.y = starBody.position.y;
}


function keyPressed(){
  if(keyCode === (DOWN_ARROW)){
		
    
    Matter.Body.setStatic(starBody, false);
    
   }


}