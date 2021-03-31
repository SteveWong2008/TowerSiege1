const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var wall1, wall2, wall3, wall4, wall5


  


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
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
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

  block17 = new Block(610,170,30,40);
  block18 = new Block(640,170,30,40);
  block19 = new Block(670,170,30,40);
  block20 = new Block(700,170,30,40);
  block21 = new Block(730,170,30,40);
  block22 = new Block(760,170,30,40);
  block23 = new Block(790,170,30,40);

  block24 = new Block(640,140,30,40);
  block25 = new Block(670,140,30,40);
  block26 = new Block(700,140,30,40);
  block27 = new Block(730,140,30,40);
  block28 = new Block(760,140,30,40);

  block29 = new Block(670,110,30,40);
  block30 = new Block(700,110,30,40);
  block31 = new Block(730,110,30,40);

  block32 = new Block(700,80,30,40);

  wall1 = new wall(210,340,50,50);
  wall2 = new wall(210,340,50,50);
  wall3 = new wall(210,340,50,50);
  wall4 = new wall(210,340,50,50);
  wall5 = new wall(210,340,50,50);
  wall6 = new wall(210,340,50,50);
  wall7 = new wall(210,340,50,50);
  

  wall9 = new wall(550,340,50,50);
  wall10 = new wall(550,340,50,50);
  wall11 = new wall(550,340,50,50);
  wall12 = new wall(550,340,50,50);
  wall13 = new wall(550,340,50,50);
  wall14 = new wall(550,340,50,50);
  wall15 = new wall(550,340,50,50);
  wall16 = new wall(550,340,50,50);


  polygon = new Bird(150,250) 

  slingshot = new sling(polygon.body,{x:150,y:250})

 
  
  console.log(polygon)
  

}
function draw() {
  background(50); 
  
  textSize(20);
  fill("lightyellow");
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();

  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  
  
  ground.display();
  stand1.display();
  stand2.display();
  
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

  fill("green");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill("black");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill("green");
  block29.display();
  block30.display();
  block31.display();
  
  fill("black");
  block32.display();
  

  fill("red");
  
  
  slingshot.display();
  polygon.display();

  
 
 console.log(mouseX,mouseY);
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

