status = "";
object = [];

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
        object = result;
    }
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 750, 480);
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            strokeWeight(1);
            fill("red");
            percent = floor(object[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 22);
            textSize(25);
            noFill();
            stroke("red");
            strokeWeight(3);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            document.getElementById("status").innerHTML = "Object Detected";
        }
    }
}