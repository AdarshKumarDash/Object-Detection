function setup() {
    canvas = createCanvas(750, 480);
    canvas.center();
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 750, 480);
    fill("red")
    strokeWeight(1);
    text("Dog", 100, 40);
    textSize(25);
    noFill();
    stroke("red");
    strokeWeight(3);
    rect(100, 50, 260 , 420)
}