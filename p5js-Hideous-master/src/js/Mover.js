import p5 from "p5"; // static用

export default class Mover {

  constructor(p, defX, defY) {
    // p5インスタンス作成
    this.p = p;
    this.defX = defX;
    this.defY = defY;

    // 数値の定義
    this.nowPosition = this.p.createVector(this.p.width/2 + this.defX , this.p.height/2 + this.defY);
    this.rotatePos = this.p.createVector(0, 0);
    this.r = 70;
    this.dTheta = 0;
    this.defTheta = 18;
    this.numtheta = 20;
    this.er = [];
    this.xoff = [];
    this.mTheta = 0;

    // // 配列の設定
    // var num = 0;
    // var defNum = 10;
    // for (var i = 0; i < this.numtheta; i++) {
    //   num = defNum * i;
    //   this.xoff.push(num);
    // }

    // 配列の設定
    var num = 0;
    var defNum = 50;
    for (var i = 0; i < this.numtheta; i++) {
      num = defNum * i;
      this.xoff.push(num);
    }
  }

  update() {
    //for (var i = 0; i <= this.numtheta; i++){
    //  this.er[i] = 5 * this.p.sin(this.p.radians(this.xoff[i]));
    //  this.xoff[i] += 1;
    //}

    for (var i = 0; i <= this.numtheta; i++){
      this.er[i] = 50 * this.p.sin(this.p.radians(this.xoff[i]));
      this.xoff[i] += 4.5;
    }
  }

  display() {
    //this.p.background(0);
    this.p.smooth();
    this.p.noStroke();
    //this.p.fill(0);

    for (var i = 0; i < this.numtheta; i++){
      // settting
      this.dTheta = this.p.radians(this.defTheta * i);
      this.rotatePos.x = 20 * this.p.cos(this.mTheta);
      this.rotatePos.y = 20 * this.p.sin(this.mTheta);

      // draw
      this.nowPosition.x = this.r * this.p.cos(this.dTheta) + this.defX;
      this.nowPosition.y = this.r * this.p.sin(this.dTheta) + this.defY;
      this.p.ellipse(this.nowPosition.x, this.nowPosition.y, this.er[i], this.er[i]);

      // icrement
      this.mTheta += 0.001;
    }
  }


}
