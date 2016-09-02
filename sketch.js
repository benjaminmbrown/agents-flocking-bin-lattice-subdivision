var vehicles = [];
var flock;
var predators = [];
var debug;
var scale = 10;
var cols, rows;

function setup() {

    createCanvas(1920, 1080);
    setFrameRate(50);

    cols = width/scale;
    rows = height/scale;
    grid = create2DArray(cols,rows);

    console.log("GRID",grid);
    flock = new Flock();
    predators = new Flock();

    var type = 1;
    for (var i = 0; i < 30; i++) {
        var v = new Vehicle(width / 2, height / 2, type);
        flock.addVehicle(v);
    }
}

function draw() {
    background(255);
    flock.run();
    predators.run();
}

function mouseDragged() {
    flock.addVehicle(new Vehicle(mouseX, mouseY, 1));
}

function keyPressed() {
    for (var i = 0; i < key; i++) {
        predators.addVehicle(new Vehicle(width / 2, height / 2));
    }
}

function create2DArray(cols,rows) {
    var array = [];
    for (var i = 0; i < cols; i++) {
        array[i] = [];
    }
    return array;

}
