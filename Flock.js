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
			var column = this.vehicleFlock[i].position.y / this.resolution;
			var row = this.vehicleFlock[i].position.x / this.resolution;

			//this.vehicleFlock[i].run(this.vehicleFlock);
			this.vehicleFlock[i].run(this.grid[column][row]);
		}
	}

	this.addVehicle = function(vehicle){
		
		this.vehicleFlock.push(vehicle);
	}



}
