import p5 from "p5";

export default class Mover {

  constructor(p) {
    // p5インスタンス作成
    this.p = p;

    // 数値の定義
    this.position = this.p.createVector(400, 50);
    this.velocity = this.p.createVector(1, 0);
    this.acceleration = this.p.createVector(0, 0);
    this.mass = 1;
    this.force = this.p.createVector(0, 0);
  }

  applyForce(f) {
    this.force = p5.Vector.div(f, this.mass);
    console.log(this.force);
    console.log(this.acceleration);
    this.acceleration.add(this.force);

  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.strokeWeight(2);
    this.p.fill(127);
    this.p.ellipse(this.position.x, this.position.y, 16, 16);
  }

  checkEdges() {
    if (this.position.x > this.p.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = this.p.width;
    }

    if (this.position.y > this.p.height) {
      this.velocity.y *= -1;
      this.position.y = this.p.height;
    }
  }

}
