class Ball{
    constructor(x,y,w,h){
        let options = {
            isStatic:true
           };
           
           this.body = Bodies.circle(x, y, w, h, options);
           this.w = w;
           this.h = h;
           World.add(world, this.body);
         }
       
         show() {
           let pos = this.body.position;
           push();
           ellipseMode(CENTER);
           noStroke();
           fill("Plum");
           ellipse(pos.x,pos.y, this.w, this.h);
           pop();
         }
    }
