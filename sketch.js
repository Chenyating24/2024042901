var captureGraphics
var capture_width=640
var capture_height=480
var span=10
var radioElement=createRadio

function setup() { 
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height);//設定顯示畫面大小
  captureGraphics=captureGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()

  //選紐
  radioElement=createRadio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.style("color","#fff")
  
}

function draw() {
  background(0);
  noStroke()
  push()
    translate(capture_width/2-capture_width/2, capture_height/2-capture_height/2) //把原點移到畫面中間
    captureGraphics.image(capture,0,0) //在(mouseX, mouseY)顯示capture
    for(var x = 0;x<captureGraphics.width;x=x+span){
      for(var y=0;y<captureGraphics.height;y=y+span){
        var pixel=captureGraphics.get(x,y)
        fill(pixel)
        if(radioElement.value()=="方塊"){
          rect(x,y,span)
        }
        if(radioElement.value()=="圓圈"){
          ellipse(x,y,span)
        }
      }
    }
  pop()
}
