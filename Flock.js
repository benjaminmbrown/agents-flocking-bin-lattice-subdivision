var Flock = function(vehicles) {
   
	this.vehicleFlock = [];
	this.resolution = 10;
	this.cols= width/this.resolution;
	this.rows = height/this.resolution;

    this.create2DArray = function(n) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array[i] = [];
        }
        return array;
    }

    this.grid = this.create2DArray(this.cols);

    console.log(this.grid);

	this.run = function(){
		for(var i = 0; i<this.vehicleFlock.length; i++){
			this.vehicleFlock[i].run(this.vehicleFlock);
			if(this.vehicleFlock[i].life>0){
				//this.vehicleFlock[i].reduceLife(1);
			}else{
				//this.vehicleFlock.splice(0,i);
			}
		}
	}

	this.addVehicle = function(vehicle){
		
		this.vehicleFlock.push(vehicle);
	}



}
