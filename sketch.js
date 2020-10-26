
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var truck;



function setup() {
	createCanvas(1600,1600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	
	truck = new Truck(400,400,image.width,image.height);
	ground = new Ground(500,370,150,30);
	

  
}


function draw() {
  background(0);
  Engine.update(engine);

  truck.velocityX = 1;
  camera.position.x= camera.position+100

  
  ground.display();
  truck.display();

  
 
}

