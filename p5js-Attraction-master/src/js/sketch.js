import P5 from "p5";
import Vector from "./Vector";
import Mover from "./Mover";
import Attractor from "./Attractor";

const sketch = (p) => {

  // 変数宣言
  var a;
  var m;
  var f;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(640, 360);
    m = new Mover(p);
    a = new Attractor(p);
  }

  p.draw = function() {
    p.background(255);
    f = a.attract(m);
    m.applyForce(f);
    m.update();

    m.checkEdges();

    a.display();
    m.display();
  }
}

new P5(sketch);
