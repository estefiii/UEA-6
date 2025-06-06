let imgQ, imgW, imgE, imgR, imgT, imgY, imgU, imgI, imgO, imgP;
let imagenActual = null;


function preload() {
  imgQ = loadImage('assets/Queer.jpg');
  imgW = loadImage('assets/Whiplash.jpg');
  imgE = loadImage('assets/Edward.jpg');
  imgR = loadImage('assets/Reservoir.jpg');
  imgT = loadImage('assets/Theumbrellas.jpg');
  imgY = loadImage('assets/Ytmt.jpg');
  imgU = loadImage('assets/Uncut.jpg');
  imgI = loadImage('assets/Inthe.jpg');
  imgO = loadImage('assets/Oppenheimer.jpg');
  imgP = loadImage('assets/Ponyo.jpg');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Peliculas con teclado", width/2, height/2);
  
  //imgX = (width - img.width) / 2;
  //imgY = (height - img.height) / 2;
}

function draw() {
  background(0);

  if (imagenActual !== null) {
  let imgRatio = imagenActual.width / imagenActual.height;
    let canvasRatio = width / height;

    let newWidth, newHeight;

    if (imgRatio > canvasRatio) {
      newWidth = width * 0.8;
      newHeight = newWidth / imgRatio;
    } else {
      newHeight = height * 0.8;
      newWidth = newHeight * imgRatio;
    }

    let x = (width - newWidth) / 2;
    let y = (height - newHeight) / 2;

    image(imagenActual, x, y, newWidth, newHeight);
  }
}


function keyPressed(){
  if(key === 'q') {imagenActual=imgQ;}

  if(key === 'w') {imagenActual=imgW;}
  
  if(key === 'e') {imagenActual=imgE;}
  
  if(key === 'r') {imagenActual=imgR;}
  
  if(key === 't') {imagenActual=imgT;}
  
  if(key === 'y') {imagenActual=imgy;}
  
  if(key === 'u') {imagenActual=imgU;}
  
  if(key === 'i') {imagenActual=imgI;}
  
  if(key === 'o') {imagenActual=imgO;}
  
  if(key === 'p') {imagenActual=imgP;}
}


