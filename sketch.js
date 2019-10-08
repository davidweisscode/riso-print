let img;
let black, red, green, blue;
let ditherType = 'atkinson';
let threshold = 110;
let printWidth, printHeight;
const size = 5;

function preload() {
    img = loadImage("img/me1.jpg");
}

function setup() {
    noLoop();
    pixelDensity(3);
    printWidth = img.width / size;
    printHeight = img.height / size;
    createCanvas(printWidth, printHeight);
    black = new Riso("black");
    red = new Riso("red");
    green = new Riso("green");
    blue = new Riso("blue");
}

function draw() {
    background("#ffffff");
    clearRiso();

    let dithered = ditherImage(img, ditherType, threshold);
  
    let reds = extractRGBChannel(img, "red");
    let greens = extractRGBChannel(img, "green")
    let blues = extractRGBChannel(img, "blue");
    
    black.fill(100);
    black.image(dithered, 0, 0, printWidth, printHeight);

    // red.fill(100);
    // red.image(reds, 0, 0, printWidth, printHeight);
    
    // green.fill(100);
    // green.image(greens, 5, 5, printWidth, printHeight);
    
    // blue.fill(100);
    // blue.image(blues, 0, 0, printWidth, printHeight);

    drawRiso();
}
