class Ground {

constructor(x,y,w,h){

    var options= {
        isStatic:true

    }

    this.body=Bodies.rectangle(x,y,w,h,options)
    this.w=w;
    this.y=y
    World.add(world,this.body)

}




}





