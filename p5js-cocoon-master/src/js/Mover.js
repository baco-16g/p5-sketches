import p5 from "p5"; // static用

export default class Mover {

  constructor(p, m, x, y) {
    // p5インスタンス作成
    this.p = p;

    // 数値の定義
    this.position = this.p.createVector(x, y);
    this.velocity = this.p.createVector(0, 0);
    this.acceleration = this.p.createVector(0, 0);
    this.mass = m;
    this.force = this.p.createVector(0, 0);
    this.distance = 0;
    this.strength = 0;
    this.G = 0.2;
  }

  attract(m) {
    this.force = p5.Vector.sub(this.position, m.position); // 力の向き（mからaへの）

    this.distance = this.force.mag(); // 距離（m.a間）
    this.distance = this.p.constrain(this.distance,5,10); // 距離の制限
    this.force.normalize(); // 力の向きの正規化


    this.strength = (this.G * this.mass * m.mass) / (this.distance * this.distance); // 力の大きさ
    this.force.mult(this.strength);

    return this.force;
  }

  applyForce(f) {
    this.force = p5.Vector.div(f, this.mass);
    this.acceleration.add(this.force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(255, 255, 255, 70);
    this.p.strokeWeight(0.01);
    this.p.fill(0,100);
    this.p.point(this.position.x, this.position.y);
  }

  checkEdges() {
    if (this.position.x > this.p.width || this.position.x < 0) {
      this.position.x *= -5;
    }

    if (this.position.y > this.p.height || this.position.y < 0) {
      this.velocity.y *= -5;
    }
  }

}
