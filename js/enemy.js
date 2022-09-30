class Enemy {
  constructor() {
    //todas las propiedades de la torre

    //imagen
    this.img = new Image();
    this.img.src = "../images/enemy.png";
    //tamaño
    this.w = 25;
    this.h = 30;
    //posicion
    this.randomNumberX = Math.floor(Math.random() * canvas.width) 
    this.x = this.randomNumberX;
    this.y = 0;
    //movimiento
    this.speed = 1
  }


  //dibujado
  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  //movimiento
  movimientoEnemy = () => {
    this.y = this.y + this.speed
  }
  //colision?
  //muerte





}
