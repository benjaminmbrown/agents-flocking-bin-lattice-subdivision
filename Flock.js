var Flock = function(vehicles) {
   
	this.vehicleFlock = [];

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
		console.log('adding vehicle');
		this.vehicleFlock.push(vehicle);
	}

}
