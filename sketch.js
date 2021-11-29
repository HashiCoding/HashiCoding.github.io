let colorPicker;
let slider;
let sliideVal;


function setup() {
  noCanvas();
  
  createCanvas(100, 100);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(125,207); 
  
  slider = createSlider(1, 250, 50,1);
  slider.position(270, 211);
  slider.style('width', '150px');
  
  
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  sliderVal=slider.value()
  
  
}

function mouseDragged() {
  noStroke();
  fill(colorPicker.color());
  circle(mouseX, mouseY, sliderVal);
  
}

function doubleClicked() {
  background(255);
}
