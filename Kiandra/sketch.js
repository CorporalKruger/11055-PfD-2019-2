function setup() {

//creating the backgound
createCanvas(400, 400);
background(250);

//variable for number of eyes
var eyes = prompt("How many eyes will I have today?", "1-3");
var txtr = ""
}

function draw() {
    
    line (240, 215, 280, 260);
    line (160, 215, 120, 260);
    line (220, 290, 240, 380);
    line (180, 290, 160, 380);
    
    fill (95,158,160);
    rect (155, 195, 88, 120, 5);
    
    
    
    fill (243,211,191);
    ellipse(200, 150, 100, 100);
    
    
    
if (eyes == null||eyes == ""){
    text = "User cancelled prompt"
}else if (eyes == 1){
    ellipse ()
}
}