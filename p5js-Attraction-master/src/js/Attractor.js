import p5 from "p5"; // static用

export default class Attractor {

  constructor(p) {
    // p5インスタンス作成
    this.p = p;

    // 数値の定義
    this.location = this.p.createVector(this.p.width/2, this.p.height/2);
    this.mass = 20;
    this.G = 0.8;
    this.force = this.p.createVector(0, 0);
    this.distance = 0;
    this.strength = 0;
  }

  attract(m) {
    this.force = p5.Vector.sub(this.location, m.position); // 力の向き（mからaへの）

    console.log(this.force);

    this.distance = this.force.mag(); // 距離（m.a間）
    this.distance = this.p.constrain(this.distance,5,25); // 距離の制限
    this.force.normalize(); // 力の向きの正規化


    this.strength = (this.G * this.mass * m.mass) / (this.distance * this.distance); // 力の大きさ
    this.force.mult(this.strength);

    return this.force;
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175, 200);
    this.p.ellipse(this.location.x, this.location.y, this.mass*2, this.mass*2);
  }
}
