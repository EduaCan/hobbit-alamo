class Enemy {
  constructor(destinoX, destinoY, difficulty) {  
    //todas las propiedades de los enemigos

    //imagen
    this.img = new Image();
    this.img.src = "../images/enemy.png";
    //tamaño
    this.w = 25;
    this.h = 30;
    //posicion
    this.randomNumberX = Math.floor(Math.random() * canvas.width - 50);
    this.x = this.randomNumberX + 25;
    this.y = 0;
    //movimiento
    this.speed = difficulty; 

    this.deltaX = destinoX - this.x; //diferencia coordenadas x
    this.deltaY = destinoY - this.y; //diferencia coordenadas x

    this.hippo = Math.sqrt(Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2)); //hipotenusa

    this.sin = this.deltaY / this.hippo; //seno     (.) -
    this.cos = this.deltaX / this.hippo; //coseno    - (.)

    this.composedSpeedX = this.speed * this.cos; //vector x
    this.composedSpeedY = this.speed * this.sin; //vector y
  }

  //dibujado
  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  //movimiento
  movimientoEnemy = () => {
    this.x = this.x + this.composedSpeedX;
    this.y = this.y + this.composedSpeedY;
  };
}
