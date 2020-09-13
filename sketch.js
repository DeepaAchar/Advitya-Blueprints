const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,box1,box2;

function setup() {
  createCanvas(1200,800);
  
  engine=Engine.create();
  world=engine.world;

  box1=new Box(600,450,100,100);
  box2=new Box(670,550,100,100);
  console.log(box2);
  ground=new Ground(600,600,1200,10);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  box1.display();
  ground.display();
  box2.display();
}