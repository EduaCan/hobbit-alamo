class Torre {
  constructor() {
    //todas las propiedades de la torre

    //imagen
    this.img = new Image();
    this.img.src = "../images/torreMagica5.png";
    //tamaño
    this.w = 50;
    this.h = 70;
    //posicion
    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height / 2 - this.h / 2;
  }

  //metodos y acciones de la torre

  drawTorre = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
