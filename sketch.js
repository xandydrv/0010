function setup() {
    createCanvas(800,500);
    background("blue");
  }
  
  function draw() {
    
    fill("yellow")
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,20)
  stroke("purple");
  }
  }
  