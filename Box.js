class Box{
    constructor(x,y,width,height){
        var options={
            friction:1,
            restitution:0.8,
            density:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.width=width;
        this.height=height;
    }

    //Functions
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        //translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        stroke("green");
        strokeWeight(3);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}