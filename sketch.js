
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint=Matter.Constraint;

 var  stoneObj,groundObject, launcherObject;
 var world,boy;
 var score = 0;
 var backgroundImg

 var bg = "images/bg1.png";

 function preload(){
 //backgroundImg = loadImage(bg);
 getBackgroundImg();

 }
 function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,25); 


	mango1=new mango(600,450,30,40);
  mango2=new mango(630,450,30,40);
	mango3=new mango(660,450,30,40);
	mango4=new mango(690,450,30,40);
	mango5=new mango(615,410,30,40);

  mango6=new mango(645,410,30,40);
  mango7=new mango(675,410,30,40);
  mango8=new mango(630,370,30,40);
  mango9=new mango(660,370,30,40);
	mango10=new mango(645,330,30,40);

	       mango11=new mango(930,240,30,40);
	       mango12=new mango(960,240,30,40);
         mango13=new mango(990,240,30,40);
	       mango14=new mango(1020,240,30,40);
         mango15=new mango(1050,240,30,40);

         mango16=new mango(945,200,30,40);
    	   mango17=new mango(975,200,30,40);
         mango18=new mango(1005,200,30,40);
         mango19=new mango(1035,200,30,40);
    	   mango20=new mango(960,160,30,40);

        	mango21=new mango(990,160,30,40);
         mango22=new mango(1020,160,30,40);
	       mango23=new mango(975,120,30,40);
	       mango24=new mango(1005,120,30,40);
         mango25=new mango(990,80,30,40);

	       mango26=new mango(1000,580,30,40);
         mango27=new mango(1030,580,30,40);
	       mango28=new mango(1060,580,30,40);
	       mango29=new mango(1015,540,30,40);
         mango30=new mango(1045,540,30,40);

         mango31=new mango(1030,500,30,40);
	       mango32=new mango(1030,460,30,40);
	       mango33=new mango(1030,420,30,40);

  base = new ground(645,475,130,10);
  base1 = new ground(995,265,190,10);

	    groundObject=new ground(width/2,600,width,80);
      launcherObject=new launcher(stoneObj.body,{x:235,y:420})
      Engine.run(engine);
 
}

 function draw() {
   //background(backgroundImg);
   if(backgroundImg)
        background(backgroundImg);

   textSize(35)
   fill("black")
   stroke("white");
   text("Score : " + score, 1100, 50)
 
   textSize(25);
   fill("black");
   stroke("white");
   text("Press up arrow key to get another shot",500 ,50);

   textSize(20);
   fill("black");
   stroke("white");
   text("Speed : "+ stoneObj.body.speed,100 ,50);
  

    stoneObj.display();

     fill("red");
     mango1.display();
     mango2.display();
     mango3.display();
     mango4.display();

     fill("green");
     mango5.display();
     mango6.display();
     mango7.display();

     fill("blue");
     mango8.display();
     mango9.display();

     fill("pink");
     mango10.display();

     fill("red");
     mango11.display();
     mango12.display();
     mango13.display();
     mango14.display();
     mango15.display();

     fill("green");
     mango16.display();
     mango17.display();
     mango18.display();
     mango19.display();

     fill("blue");
     mango20.display();
     mango21.display();
     mango22.display();

     fill("pink");
     mango23.display();
     mango24.display();

     fill("yellow");
     mango25.display();

     fill("red");
     mango26.display();
     mango27.display();
     mango28.display();
     mango29.display();
     mango30.display();

     fill("green");
     mango31.display();

     fill("blue");
     mango32.display();

     fill("pink");
     mango33.display();

    base.display();
    base1.display();

  groundObject.display();

 
  launcherObject.display();

  mango1.score();
  mango2.score();
  mango3.score();
  mango4.score();
  mango5.score();
  mango6.score();
  mango7.score();
  mango8.score();
  mango9.score();
  mango10.score();
  mango11.score();
  mango12.score();
  mango13.score();
  mango14.score();
  mango15.score();
  mango16.score();
  mango17.score();
  mango18.score();
  mango19.score();
  mango20.score();
  mango21.score();
  mango22.score();
  mango23.score();
  mango24.score();
  mango25.score();
  mango26.score();
  mango27.score();
  mango28.score();
  mango29.score();
  mango30.score();
  mango31.score();
  mango32.score();
  mango33.score();
 
 
}

function mouseDragged()
{
 Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) ;

	launcherObject.attach(stoneObj.body);
	}
 
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "images/bg1.png";
    }
    else{
        bg = "images/bg3.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}