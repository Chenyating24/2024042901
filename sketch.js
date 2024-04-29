function setup() { 
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(320,240);//設定顯示畫面大小
}

function draw() {
  background(220);
  push()
    translate(width/2-160, height/2-120) //把原點移到畫面中間
    image(capture,0,0) //在(mouseX, mouseY)顯示capture
  pop()
}
