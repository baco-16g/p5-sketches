import p5 from "p5"; // static用

export default class Mover {

  constructor(p) {
    // p5インスタンス作成
    this.p = p;

    // 数値の定義
    this.nowPosition = this.p.createVector(this.p.width/2, this.p.height/2);
    this.prePosition = this.p.createVector(this.p.width/2, this.p.height/2);
    this.theta = 0;
    this.r = 0;
    this.er = 1;
    this.xoff = 0;
    this.yoff = 100;
  }

  update() { 
    this.prePosition = this.nowPosition;
    
    var num = this.p.random(1);
    
    if(num < 0.2) {
      this.nowPosition.x = this.r * this.p.cos(this.theta) + this.p.width/2;
      this.nowPosition.y = this.r * this.p.sin(this.theta) + this.p.height/2;
      
      this.theta += this.p.noise(this.xoff, 0, 1, 0, this.p.width);
      this.r += 0.3;
    } else if(num < 0.4) {
      this.nowPosition.x += 3;
    } else if(num < 0.6) {
      this.nowPosition.x -= 3;
    } else if(num < 0.8) {
      this.nowPosition.y += 3;
    } else {
      this.nowPosition.y -= 3;
    }
  }

  display() {
    //this.p.background(0, 95);
    this.p.smooth();
    this.p.stroke(255, 100);
    this.p.strokeWeight(2);
    this.p.line(this.prePosition.x, this.prePosition.y, this.nowPosition.x, this.nowPosition.y);
  }


}
