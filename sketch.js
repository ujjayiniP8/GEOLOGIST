
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone ;
var sand1 , sand2 , sand3 , sand4 , sand5 , sand6 ;
var rubber , iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,640,800,20)
	var options = {
		isStatic: true
	}
	ground.shapeColor = "brown";
	ground.body = Bodies.rectangle(400,640,800,20,options);
	ground.width = 800;
	ground.height = 20;
	World.add(world, ground.body);

	//Create Bodies 

	hammer = new Hammer(100,100)
	stone = new Stone(300,600,80,80)
	iron = new Stone(400,630,50,30)

	var options = {
		restitution : 0.3,
		friction :5, 
		density : 1
	}
	
	  sand1 = Bodies.circle(200,620,5,options);
	  World.add(world,sand1);
	  
	  sand2 = Bodies.circle(100,620,5,options);
	  World.add(world,sand2);
	  
	  sand3 = Bodies.circle(170,620,5,options);
	  World.add(world,sand3);

	  sand4 = Bodies.circle(600,620,5,options);
	  World.add(world,sand4);
	  
	  sand5 = Bodies.circle(470,620,5,options);
	  World.add(world,sand5);
	  
	  sand6 = Bodies.circle(40,620,5,options);
	  World.add(world,sand6);
	  
	  rubber = Bodies.circle(550,610,30,options);
      World.add(world,rubber);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  fill(0);
  stone.display();
  fill("red");
  iron.display();
  ellipseMode(RADIUS);
  fill("red");
  ellipse(sand1.position.x,sand1.position.y,5,5);
  ellipse(sand2.position.x,sand2.position.y,5,5);
  ellipse(sand3.position.x,sand3.position.y,5,5);
  ellipse(sand4.position.x,sand4.position.y,5,5);
  ellipse(sand5.position.x,sand5.position.y,5,5);
  ellipse(sand6.position.x,sand6.position.y,5,5);
  fill("blue");
  ellipse(rubber.position.x,rubber.position.y,30,30);
  drawSprites();
 
}



