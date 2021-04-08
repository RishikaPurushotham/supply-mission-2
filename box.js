class Box{

constructor(){
this.box=Bodies.rectangle(400,650,200,20,{isStatic:true})
World.add(world,this.box)

this.box1=Bodies.rectangle(500,610,20,100,{isStatic:true})
World.add(world,this.box1)

this.box2=Bodies.rectangle(300,610,20,100,{isStatic:true})
World.add(world,this.box2)

}


display(){
rectMode(CENTER)
fill("red")
rect(this.box.position.x,this.box.position.y,200,20)
rect(this.box1.position.x,this.box1.position.y,20,100)
rect(this.box2.position.x,this.box2.position.y,20,100)
}

}