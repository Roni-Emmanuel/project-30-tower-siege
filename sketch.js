const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var polygon1;
var slinghsotobject;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(730,200,300,10);
  // creating polygon
  polygon1 = new polygon (100,300);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  // creating blocks for left side
  // level 1
  block17 = new Block(700,150,30,40);
  block18 = new Block(730,150,30,40);
  block19 = new Block(760,150,30,40);
  block20 = new Block(790,150,30,40);
  block24 = new Block(820,150,30,40);
  block25 = new Block(850,150,30,40);
  // level 2
  block21 = new Block(730,110,30,40);
  block22 = new Block(760,110,30,40);
  block26 = new Block(790,110,30,40);
  block27 = new Block(820,110,30,40);
  // level 3 the top
  block23 = new Block(790,70,30,40);
  block28 = new Block(760,70,30,40);
  // creating the level 4 the top
  block29 = new Block(770,30,30,40);
  // creating slingshot
  slinghsotobject = new slingshot(polygon1.body,{x:135,y:260});
  
  
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("blue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block24.display();
  block25.display();
  fill("orange");
  block21.display();
  block22.display();
  block26.display();
  block27.display();
  fill("purple");
  block23.display();
  block28.display();
  fill("white");
  block29.display();
  fill("red");
  stand2.display();
  polygon1.display();
 

}



function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slinghsotobject.fly();
}


