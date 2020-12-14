class Ball{

    constructor(x,y,r){

        var options = {
            restitution : 0.8,
            friction:1.0,
            density : 1.0
        }

        this.ball = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(myworld,this.ball);


    }
    display(){
        var pos = this.ball.position;
        
        push();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }

}