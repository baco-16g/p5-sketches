//ベクトル
export default class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
    return this;
  }
  //加算
  add(x, y){
    if(x instanceof Vector){
      this.x += x.x;
      this.y += x.y;
      return this;
    }
    else{
      this.x += x;
      this.y += y;
      return this;
    }
  }
  static add(vectorA, vectorB){
    var x = vectorA.x + vectorB.x;
    var y = vectorA.y + vectorB.y;
    return new Vector(x, y);
  }
  //減算
  sub(x, y){
    if(x instanceof Vector){
      this.x -= x.x;
      this.y -= x.y;
      return this;
    }
    else{
      this.x -= x;
      this.y -= y;
      return this;
    }
  }
  static sub(vectorA, vectorB){
    var x = vectorA.x - vectorB.x;
    var y = vectorA.y - vectorB.y;
    return new Vector(x, y);
  }
  // ベクトル乗算
  mult(n){
    this.x = this.x * n;
    this.y = this.y * n;
    return this;
  }
  //ベクトル除算
  div(n){
    this.x = this.x / n;
    this.y = this.y / n;
    return this;
  }
  //ベクトルの大きさを返す
  mag(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  //正規化する
  normalize(){
    var size = this.mag();
    if(size === 0){
      return;
    }
    this.x = this.x * (1 / size);
    this.y = this.y * (1 / size);
    return this;
  }
  //最大値
  limit(max){
    if(this.mag() > max){
      return this.normalize().mult(max);
    }
    else{
      return this;
    }
  }
  //ベクトルの角度を返す
  static angle(vectorA){
    var theta = Math.atan2(vectorA.y, vectorA.x);
    return theta;
  }
  //長さ１のランダムな値を返す
  static random2D(){
    this.x = (Math.random() * 2) - 1;
    this.y = (Math.random() * 2) - 1;
    return this.normalize();
  }
  //角度から長さ１のベクトルを返す
  static fromAngle(angle){
    return new Vector(Math.cos(angle),Math.sin(angle));
  }
  //同じ値をもったVectorを返す
  static copy(vectorA){
    return new Vector(vectorA.x, vectorA.y);
  }
  //ベクトル内積
  static dot(vectorA, vectorB){
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }
  //ベクトル間の角度を返す
  static angleBetween(vectorA, vectorB){
    var theta = Math.acos((this.dot(vectorA,vectorB))/(vectorA.mag() * vectorB.mag()));
    return theta;
  }
}
