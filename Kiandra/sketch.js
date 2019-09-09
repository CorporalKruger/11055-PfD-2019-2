//veriables
var eyes = 1;

function setup() {

//creating the backgound
createCanvas(400, 400);
background(250);

//promopt for number of eyes
eyes = prompt("How many eyes will I have today? (1-3)");
}

function draw() {

//arms & legs
    line (240, 215, 280, 260);
    line (160, 215, 120, 260);
    line (220, 290, 240, 380);
    line (180, 290, 160, 380);

//body
    fill (95,158,160);
    rect (155, 195, 88, 120, 5);
    
//head
    fill (243,211,191);
    ellipse(200, 150, 100, 100);
   
//eyes
switch (eyes){
    
    case "1":
    fill (255);
    ellipse (200, 130, 30, 30);
    fill (0);
    ellipse (200, 130, 20, 20);
    break;

    case "2":
    fill (255);
    ellipse (180, 145, 30, 30);
    fill (0);
    ellipse (180, 145, 20, 20);
    
    fill(255);
    ellipse (220, 145, 30, 30);
    fill (0);
    ellipse (220, 145, 20, 20);
    break;
    
    case "3":
    fill (255);
    ellipse (180, 145, 25, 25);
    fill (0);
    ellipse (180, 145, 15, 15);
    
    fill (255);
    ellipse (220, 145, 25, 25);
    fill (0);
    ellipse (220, 145, 15, 15);
    
    fill (255);
    ellipse (200, 120, 25, 25);
    fill (0);
    ellipse (200, 120, 15, 15);
    break;
}
}