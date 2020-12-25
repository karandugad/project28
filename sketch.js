
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  stone=new Stone (200,200,20,20,);
  Image.add(boy.png);
  Image.add(mango.png);
  Image.add(tree.png);
  Image.add(stone.png);
  mango1=new Mango(350,350,30,30)
  mango2=new Mango(350,350,30,30)
  mango3=new Mango(350,350,30,30)
  mango4=new Mango(350,350,30,30)
  mango5=new Mango(350,350,30,30)


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}
function keyPressed(){
if(keyCode === 32){
   Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body);
}
}
  function mouseDragged(){
    Matter.Body.setPo0sition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}




