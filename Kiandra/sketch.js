function setup() {

//creating the backgound
createCanvas(400, 400);
background(250);

//variable for number of eyes
var eyes = prompt("How many eyes will I have today?", "1-3");
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
if (eyes == 1){
    fill (0);
    ellipse (200, 140, 20, 20);
    
} else if (eyes == 2){
    fill (0);
    ellipse (180, 145, 20, 20);
    
    fill (0);
    ellipse (220, 145, 20, 20);
    
} else if (eyes == 3){
    fill (0);
    ellipse (180, 145, 20, 20);
    
    fill (0);
    ellipse (220, 145, 20, 20);
    
    fill(0);
    ellipse (200, 130, 20, 20);
}
}