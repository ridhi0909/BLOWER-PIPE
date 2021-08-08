const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var button;
var ball;
var blower,blowermouth

function setup() {
  createCanvas(900,500);
  createSprite(400, 200, 50, 50);

  ball = new Ball(200,690,600,20);
  blower = new Blower(450,250,50,20);
  blowermouth = new Blowermouth(450,220,60,60);

  button = createButton("Click to Blow");
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  ellipseMode(RADIUS);
  rectMode(CENTER)
}

function draw() {
  background("LightCyan");
  Ball.show();
  Blower.show();
  Blowermouth.show();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0,y:0}, {x:0,y:0.05});
}

function mousePressed(){
  blow();
}