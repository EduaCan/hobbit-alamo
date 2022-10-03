class Torre {
  constructor() {
    //todas las propiedades de la torre

    //imagen
    this.img = new Image();
    this.img.src = "../images/torreMagica5.png";
    //tamaño
    this.w = 50;
    this.h = 70;
    //speed
    this.speed = 3
    //posicion

    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height - this.h - 50//canvas.height / 2 - this.h / 2;

    this.centroTorreX = this.x + this.w / 2;
    this.centroTorreY = this.y + this.h / 2;
  }

  //metodos y acciones de la torre

  drawTorre = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };


  moveTor = (direction) => {
    if (direction === "up") {
      this.y = this.y - this.speed
      this.centroTorreY = this.y + this.h / 2;
  } else if (direction === "down") {
      this.y = this.y + this.speed
      this.centroTorreY = this.y + this.h / 2;
  } else if (direction === "left") {
      this.x  = this.x - this.speed
      this.centroTorreX = this.x + this.w / 2;
  } else if (direction === "right") {
      this.x = this.x + this.speed
      this.centroTorreX = this.x + this.w / 2;
  }
  //console.log("terroCenter", this.x, this.y)
  }
}

