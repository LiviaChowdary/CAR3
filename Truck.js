class Truck{
    constructor() {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("truck.jpg");
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 4000, 4000, this.width, this.height);
        pop();
      }
  }