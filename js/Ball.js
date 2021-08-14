class Ball {
	constructor(x, y) {
		var opt = {
			'restitution':0.4,
			'friction':0,
			'density':1
		}
		this.body = Bodies.circle(x, y, 15, opt);
		this.radius = 30;
        this.image = loadImage("rock.png");
		World.add(world,this.body);
	}
	display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}
