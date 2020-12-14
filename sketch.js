const Engine = Matter.Engine;
const Bodies= Matter.Bodies
const World =Matter.World;
const Constraint = Matter.Constraint;

var myengine;
var myworld,ground;
var b1,b2,b3,b4,b5;
var ball,c;
function setup(){
    createCanvas(1200,450);

    myengine = Engine.create();
    myworld = myengine.world;

    ground = new Ground(600,440,1200,20);
    b1 = new Block(800,430);
    b2 = new Block(800,380);
    b3 = new Block(800,330);
    b4 = new Block(800,280);
    b5 = new Block(800,230);
    ball = new Ball(200,100,30);
    c = new Chain(ball.body, { x : 600, y: 100});

}


function draw(){

    background("red");
    Engine.update(myengine);
    fill("lime");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    ball.display();
    c.display();
    ground.display()
}