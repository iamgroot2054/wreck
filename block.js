class Block{

    constructor(x,y){

        var options = {
            restitution : 0.8,
            friction:1.0,
            density : 1.0
        }

        this.block = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(myworld,this.block);


    }
    display(){
        var pos = this.block.position;
        var angle = this.block.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }








}