
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ballBody,ballsprite;

function setup() {
	createCanvas(800, 700);

	ballsprite = ellipse(200,200,20,20);

	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic : false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	//Create the Bodies Here.
	ballBody = Matter.Bodies.circle(200,200,20,options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ballsprite.x = ballBody.x;
 ballsprite.y = ballBody.y; 
  drawSprites();
 
}



