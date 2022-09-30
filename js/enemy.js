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
    this.x = 200;
    this.y = 300;
  }


  //dibujado
  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  //movimiento
  //colision?
  //muerte





}
