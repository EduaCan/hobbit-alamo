class Torre {
  constructor() {
    //todas las propiedades de la torre

    //imagen
    this.img = new Image();
    this.img.src = "./images/torreMagica.png";
    //imagen hobbits
    //right
    this.img1R = new Image();
    this.img1R.src = "./images/hobbit1r.png";
    this.img2R = new Image();
    this.img2R.src = "./images/hobbit2r.png";
    this.img3R = new Image();
    this.img3R.src = "./images/hobbit3r.png";
    this.hobbitImgArrayR = [this.img1R, this.img2R, this.img3R];
    //left
    this.img1L = new Image();
    this.img1L.src = "./images/hobbit1l.png";
    this.img2L = new Image();
    this.img2L.src = "./images/hobbit2l.png";
    this.img3L = new Image();
    this.img3L.src = "./images/hobbit3l.png";
    this.hobbitImgArrayL = [this.img1L, this.img2L, this.img3L];
    //imageControl
    this.imgControl = 0;
    this.directionR = true;
    //tamaño
    this.w = 35;
    this.h = 70;
    //speed
    this.speed = 3;
    //posicion

    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height - this.h - 50; //canvas.height / 2 - this.h / 2;

    this.centroTorreX = this.x + this.w / 2;
    this.centroTorreY = this.y + this.h / 2;

    //direccion de movimiento
    this.movement = { up: false, down: false, left: false, right: false };
  }

  //metodos y acciones de la torre

  drawTorre = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  drawHobbits = (frames, directionR) => {
    if (directionR === true) {
      if (frames % 10 === 0) {
        this.imgControl++;
      }
      if (this.imgControl >= 3) {
        this.imgControl = 0;
      }
      ctx.drawImage(
        this.hobbitImgArrayR[this.imgControl],
        this.x - 12,
        this.y + 55,
        20,
        15
      );
    } else {
      if (frames % 10 === 0) {
        this.imgControl++;
      }
      if (this.imgControl >= 3) {
        this.imgControl = 0;
      }
      ctx.drawImage(
        this.hobbitImgArrayL[this.imgControl],
        this.x + this.w - 10,
        this.y + 55,
        20,
        15
      );
    }
  };

  moveTorre = () => {
    if (this.movement["up"] && this.movement["right"]) {
      this.x = this.x + this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = true;
      this.y = this.y - this.speed;
      this.centroTorreY = this.y + this.h / 2;
    } else if(this.movement["up"] && this.movement["left"]) {
      this.x = this.x - this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = false;
      this.y = this.y - this.speed;
      this.centroTorreY = this.y + this.h / 2;
    }else if (this.movement["down"] && this.movement["right"]) {
      this.x = this.x + this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = true;
      this.y = this.y + this.speed;
      this.centroTorreY = this.y + this.h / 2;
    } else if (this.movement["down"] && this.movement["left"]) {
      this.x = this.x - this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = false;
      this.y = this.y + this.speed;
      this.centroTorreY = this.y + this.h / 2;
    } else if (this.movement["up"]) {
      this.y = this.y - this.speed;
      this.centroTorreY = this.y + this.h / 2;
      this.directionR = true;
    } else if (this.movement["down"]) {
      this.y = this.y + this.speed;
      this.centroTorreY = this.y + this.h / 2;
      this.directionR = false;
    } else if (this.movement["left"]) {
      this.x = this.x - this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = false;
    } else if (this.movement["right"]) {
      this.x = this.x + this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.directionR = true;
      //console.log("terroCenter", this.x, this.y)
    }
  };
}
