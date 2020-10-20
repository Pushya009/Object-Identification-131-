function preload(){
    img=loadImage("dog and lion.jpg");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
}

function draw(){
    image(img,0,0,500,500);
    fill(255,0,0);
    text("Hi !  Lion I am your friend,dog",50,30);
    noFill();
    stroke(255,0,0);
    rect(75,50,200,360)
}