import P5 from "p5";
import Mover from "./Mover";

const sketch = (p) => {

  // 変数の宣言
  var m;


  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    m = new Mover(p);
  }

  p.draw = function() {
    m.update();
    m.display();
  }
}

new P5(sketch);
