import p5 from "p5"; // static用

export default class Mover {

  constructor(p) {
    // p5インスタンス作成
    this.p = p;

    // 数値の定義
    this.position = this.p.createVector(this.p.width/2, this.p.height/2);
    this.velocity = this.p.createVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.mouse;
    this.dir;
    this.theta;
  }

  update() {
    this.mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
    this.dir = p5.Vector.sub(this.mouse, this.position);
    this.dir.normalize();
    this.dir.mult(0.5);
    this.acceleration = this.dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    this.theta = this.velocity.heading();

    this.p.stroke(0);
    this.p.strokeWeight(2);
    this.p.fill(127);
    this.p.push();
    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.position.x, this.position.y);
    this.p.rotate(this.theta);
    this.p.rect(0, 0, 30, 10);
    this.p.pop();
  }

  checkEdges() {
    if (this.position.x > this.p.width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = this.p.width;
    }
    if (this.position.y > this.p.height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = this.p.height;
    }
  }


}
