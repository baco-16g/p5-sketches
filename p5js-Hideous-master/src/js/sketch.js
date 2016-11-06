import P5 from "p5";
import Mover from "./Mover";

const sketch = (p) => {

  // 変数の宣言
  var m = [];
  var mNum = 7;
  var dx;
  var dy;
  var r = 115;
  var dTheta = 1;
  var defTheta = 51.4;


  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    for (var i = 0; i < mNum; i++){
      dTheta = p.radians(defTheta * i);
      dx = r * p.cos(dTheta) + p.width/2;
      dy = r * p.sin(dTheta) + p.height/2;
      m[i] = new Mover(p, dx, dy);
    }
  }

  p.draw = function() {
    p.background(255);
    p.fill(0);
    //p.ellipse(p.width/2, p.height/2, 10, 10);
    for (var i = 0; i < mNum; i++){
      m[i].update();
      m[i].display();
    }
  }
}

new P5(sketch);
