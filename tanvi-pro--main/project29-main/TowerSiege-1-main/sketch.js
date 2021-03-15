const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg,platform;
var sling1,ball;
var ploygonimg;

function preload(){
    polygonimg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,300,120,20);
    stand = new Ground(800, 300, 320, 30);
    

    block1 = new Box(700,250,50,50);
    block2 = new Box(755,250,50,50);
    block3 = new Box(810,250,50,50);
    block4 = new Box(865,250,50,50);

    block5 = new Box(720,200,50,50);
    block6 = new Box(780,200,50,50);
    block7 = new Box(840,200,50,50);

    block8 = new Box(750,150,50,50);
    block9 = new Box(810,150,50,50);

    block10 = new Box(775,110,50,50);
   
    ball = Bodies.circle(100,200,20);
    World.add(world,ball);

    sling1 = new SlingShot(this.ball,{x:100,y:200})

}

function draw(){
    background("gray");
    Engine.update(engine); 
    fill("cyan")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
   block5.display();
   fill("green")
    block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
    ground.display();
    stand.display();
   
    imageMode(CENTER)
    image(polygonimg,ball.position.x, ball.position.y,40,40)

    sling1.display();
    //instructions
var instructions = 'how to play the game: drag the slingshot back and release it. The goal is to hit the blocks.'
fill(160)



text(instructions, 50,50,70,80);
  
}

     function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
     }
    
    
     function mouseReleased(){
        sling1.fly();
    }


   


