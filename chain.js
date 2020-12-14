class Chain {

    constructor(body1,point){
        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 0.3,
            length : 180
        }
        this.pointB = point;
        this.chain = Constraint.create(options);
        
        World.add(myworld,this.chain);

    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("orange")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }





}