let slider1, slider2, sliderR, sliderG, sliderB, sliderRA, sliderSW;
function setup() {
  createCanvas(400, 600);
  
  slider1 = createSlider(0, 8, 1)
  slider1.position(10, 110);
  
  slider2 = createSlider(0, 8, 1);
  slider2.position(10);
  
   sliderR = createSlider(0,255,0);
  sliderR.position(10,10);
  sliderR.style('width','80px');
  
  sliderG = createSlider(0,255,0);
  sliderG.position(10,30);
  sliderG.style('width','80px');
  
  sliderB = createSlider(0,255,0);
  sliderB.position(10,50);
  sliderB.style('width','80px');
  
  sliderRA = createSlider(100,300,80);
  sliderRA.position(10,70);
  sliderRA.style('width','80px');
  
  sliderSW = createSlider(1,20,2);
  sliderSW.position(10,90);
  sliderSW.style('width','80px');
}

function draw() {
  background(220);
  let val1= slider1.value(), val2= slider2.value()
   
  let val7 = sliderR.value(), val6 = sliderG.value(), val3 = sliderB.value(), val4 = sliderRA.value(), val5 = sliderSW.value()/4;
  fill("black")
  text("R",100,22)
  text("G",100,43)
  text("B",100,63)
  text("RA",100,82)
  text("SW",100,102)
  text("min",145,123)
  fill(val1, val2, val3);
  
  strokeWeight(val5);
for(j=0; j<val2; j++)  
  {
    for(i=0; i<val1; i++)
    {
      rect( (i*50)+5, (j*50)+5, 40, 40)
    }
  }
}