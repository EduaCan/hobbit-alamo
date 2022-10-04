class Enemy {
  constructor(destinoX, destinoY, difficulty) {
    //todas las propiedades de los enemigos

    //imagen
    this.img1 = new Image();
    this.img1.src = "../images/enemy1.png";
    this.img2 = new Image();
    this.img2.src = "../images/enemy2.png";
    this.img3 = new Image();
    this.img3.src = "../images/enemy3.png";
    this.imgArray = [this.img1, this.img2, this.img3];
    this.imgControl = 1;
    //tamaño
    this.w = 15;
    this.h = 20;
    //posicion
    this.randomNumberX = Math.floor(Math.random() * canvas.width - 50);
    this.x = this.randomNumberX + 25;
    this.y = 0;
    //movimiento
    this.speed = Math.random() * difficulty;

    this.deltaX = destinoX - this.x; //diferencia coordenadas x
    this.deltaY = destinoY - this.y; //diferencia coordenadas x

    this.hippo = Math.sqrt(Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2)); //hipotenusa

    this.sin = this.deltaY / this.hippo; //seno     (.) -
    this.cos = this.deltaX / this.hippo; //coseno    - (.)

    this.composedSpeedX = this.speed * this.cos; //vector x
    this.composedSpeedY = this.speed * this.sin; //vector y
    //sonidos
  }

  //dibujado
  drawEnemy = (frames) => {
    if (frames % 20 === 0) {
      this.imgControl++;
    }
    if (this.imgControl >= 3) {
      this.imgControl = 0;
    }
    ctx.drawImage(
      this.imgArray[this.imgControl],
      this.x,
      this.y,
      this.w,
      this.h
    );
  };

  //movimiento
  movimientoEnemy = () => {
    this.x = this.x + this.composedSpeedX;
    this.y = this.y + this.composedSpeedY;
  };
}
