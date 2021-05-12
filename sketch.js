
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree,ground,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var string,s1;


function preload(){
	boy=loadImage("images/boy.png");
  }



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
tree=new Tree(1050,300,600,700);

s1=new Ground(width/2,600,width,20);


stone=new Stone(235,420,30);
 
mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,25);
	mango8=new Mango(1140,150,25);
	mango9=new Mango(1100,230,25);
	mango10=new Mango(1200,200,25);
	mango11=new Mango(1120,50,25);
	mango12=new Mango(900,160,25);


//stringObj = new String1(stone.body,{x:235, y:420});

	//stoneObj=new stone(235,420,30); 

//Engine.run(engine);
}

function draw() {

background(230);
  //frameRate(2)
Engine.update(engine);

fill("red");
text(mouseX,100,60); 
text(mouseY,200,60);

image(boy,200,340,200,300);

tree.display();
stone.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();

//stringObj.display();

s1.display();

//stone.boy();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}