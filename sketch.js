
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	groundObj= new ground(width/2,670,width,20)
    lestSide= new ground(1100,600,20,120)
    rightSide=new ground(1200,600,20,20)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic= true,
		restitution=0.3,
		friction=0,
		density=1.2
	}

	ball=Matter.Bodies.circle(100,100,2,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  groundObj.display()
  drawSprites();
 
}

function keyPressed() {

if(keyCode === UP_ARROW){

	Matter.Body.setVelocity(this.body,{	x:20,y:-10})


}


}