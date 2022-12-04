function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("pink")
  rect(10,400-(frameCount%400), 100, 30)
  circle(200,(frameCount%100),(frameCount%100))
  rect(280,(frameCount%400), 100, 30)

}