class polygon {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':3.0,
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("polygon.png")
      
     World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      
      }
   

    };
  