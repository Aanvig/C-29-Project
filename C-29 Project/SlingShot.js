class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

       
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if(pointA.x<200) {

                push()
                strokeWeight(7);
                stroke(48,22,8)
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
                sling(this.sling,point.x-35,pointA.y-10,15,30);
                pop()
            } else {
                push()
                strokeWeight(0);
                stroke(0,0,0)
                line(pointA.x-15, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.y-10,15,30);
                pop()
           }
        
    }
    
}