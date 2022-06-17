status = "";

function setup() {
    canvas = createCanvas(750, 480);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelloaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, getResult);
}

function getResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 750, 480);
    fill("red")
    strokeWeight(1);
    text("Dog", 100, 40);
    text("Cat", 360, 40)
    textSize(25);
    noFill();
    stroke("red");
    strokeWeight(3);
    rect(100, 50, 260 , 420);
    rect(350, 50, 340 , 420)
}