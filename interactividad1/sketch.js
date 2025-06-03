let img;

let im1;

let imgX, imgY;

function preload() {
  img = loadImage('assets/Q-uentin.jpg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  imgX = (width - img.width) / 2;
  imgY = (height - img.height) / 2;
}

function draw() {
  //background(220);
  //im1=image(img,0,0);
}


function keyPressed(){
  if(key === 'q'){
    background(220);
    background-color(222,0,0)
    im1=image(img,imgX, imgY);

  }
}


