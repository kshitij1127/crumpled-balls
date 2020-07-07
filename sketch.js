const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine , world
 

function  setup() {
  var engine = Engine.create();
  var world = engine.world

  target1 = new Target(100,200,10,100)
  target2 = new Target(200,200,10,100)
  target3 = new Target(100,250,100,10)
}

function draw() {
  Engine.update(engine)
  target1.display()
  target2.display()
  target3.display()
}