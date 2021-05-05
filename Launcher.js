class Launcher{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.004,
        lenght:2
    }
    this.pointB=pointB;
    this.bodyA=bodyA;
    this.launcher=Constraint.create(options);
    World.add(world,this.launcher);
}

fly(){
    this.launcher.bodyA=null;
}
attach(bodyA){
    this.launcher.bodyA=bodyA;
}
display(){
    if(this.launcher.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        stroke(180);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}