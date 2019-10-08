let img;
let black, red, green, blue;
let ditherType = 'atkinson';
let threshold = 110;
let printWidth, printHeight;
const size = 0.8;

function preload() {
    img = loadImage("img/me3.jpeg");
}

function setup() {
    noLoop();
    pixelDensity(2);
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
    
    black.image(dithered, -20, -20, printWidth*1.005, printHeight*1.1005);

    red.image(reds, 0, 0, printWidth*1.7, printHeight*1.7);
    
    green.image(greens, 0, 0, printWidth*1.3, printHeight*1.3);
    
    blue.image(blues, 0, 0, printWidth, printHeight);

    drawRiso();
}
