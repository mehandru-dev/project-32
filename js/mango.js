class mango{
    constructor(x, y,width,height) {
        var options = {
            isStatic:false,
            restitution :0.4,
            friction :0.2
			
        }
		    this.Visiblity=255;
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
    
		 if(this.body.speed < 5){
		   // var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
		  }
	  
		  else {
			var pos= this.body.position;
			World.remove(world,this.body);
			push();
			this.Visiblity = this.Visiblity - 100;
			translate(pos.x, pos.y);
			tint(255,this.Visiblity);
			//rectMode(CENTER);
			rect(this.body.position.x,this.body.position.y,this.width, this.height);
			pop();
		  }


      }

       score(){
        if(this.Visiblity<=0 && this.Visiblity >= -1000){
        score=score+1;
        }
        
        
        
        }
}
