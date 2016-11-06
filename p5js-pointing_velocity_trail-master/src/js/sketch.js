import P5 from "p5";
import Mover from "./Mover";

const sketch = (p) => {

  // 変数の宣言
  var m;


  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(640, 360);
    m = new Mover(p);
  }

  p.draw = function() {
    p.background(255);

    m.update();
    m.checkEdges();
    m.display();
  }
}

new P5(sketch);
