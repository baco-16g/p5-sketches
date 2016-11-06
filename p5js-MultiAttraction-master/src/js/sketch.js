import P5 from "p5";
import Mover from "./Mover";

const sketch = (p) => {

  // 変数宣言
  var a;
  var m;
  var f;
  var movers = new Array(10);

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(400, 400);

    for (var i = 0; i < movers.length; i++) {
      movers[i] = new Mover(p, p.random(0.1, 2), p.random(p.width), p.random(p.height));
    }
  }

  p.draw = function() {
    p.background(255);
    for (var i = 0; i < movers.length; i++) {
      for (var j = 0; j < movers.length; j++) {
        if(i !== j) {
          f = movers[j].attract(movers[i]);
          movers[i].applyForce(f);
        }
      }
      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();
    }
  }
}

new P5(sketch);
