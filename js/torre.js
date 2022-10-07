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
    //up
    this.img1U = new Image();
    this.img1U.src = "./images/hobbit1u.png";
    this.img2U = new Image();
    this.img2U.src = "./images/hobbit2u.png";
    this.img3U = new Image();
    this.img3U.src = "./images/hobbit3u.png";
    this.hobbitImgArrayU = [this.img1U, this.img2U, this.img3U];
    //imageControl
    this.imgControl = 0;
    this.direction = "right"; //para que los hobbits empujen por el lado correcto
    //tamaño
    this.w = 35;
    this.h = 70;
    //speed
    this.speed = 3;
    //posicion

    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height - this.h - 50;

    this.centroTorreX = this.x + this.w / 2;
    this.centroTorreY = this.y + this.h / 2;

    //direccion de movimiento
    this.movement = { up: false, down: false, left: false, right: false };
  }

  //metodos y acciones de la torre

  //dibujado de la torre
  drawTorre = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //animacion de los hobbits
  drawHobbits = (frames, direction) => {
    if (direction === "right") {
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
    } else if (direction === "up") {
      if (frames % 10 === 0) {
        this.imgControl++;
      }
      if (this.imgControl >= 3) {
        this.imgControl = 0;
      }
      ctx.drawImage(
        this.hobbitImgArrayU[this.imgControl],
        this.x + 7,
        this.y + 60,
        20,
        15
      );
    } else if (direction === "left") {
      if (frames % 10 === 0) {
        this.imgControl++;
      }
      if (this.imgControl >= 3) {
        this.imgControl = 0;
      }
      ctx.drawImage(
        this.hobbitImgArrayL[this.imgControl],
        this.x + this.w - 6,
        this.y + 55,
        20,
        15
      );
    }
  };

  //movimiento arriba
  moveUp = () => {
    if (this.y > 0) {
      this.y = this.y - this.speed;
      this.centroTorreY = this.y + this.h / 2;
      this.direction = "up";
    }
  };

  //movimiento abajo
  moveDown = () => {
    if (this.y + this.h < canvas.height) {
      this.y = this.y + this.speed;
      this.centroTorreY = this.y + this.h / 2;
      this.direction = "down";
    }
  };

  //movimiento derecha
  moveRight = () => {
    if (this.x + this.w < canvas.width) {
      this.x = this.x + this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.direction = "right";
    }
  };

  //movimiento izquierda
  moveLeft = () => {
    if (this.x > 0) {
      this.x = this.x - this.speed;
      this.centroTorreX = this.x + this.w / 2;
      this.direction = "left";
    }
  };

  //gestion de todos los movimientos
  moveTorre = () => {
    if (this.movement["up"] && this.movement["right"]) {
      this.moveUp();
      this.moveRight();
    } else if (this.movement["up"] && this.movement["left"]) {
      this.moveUp();
      this.moveLeft();
    } else if (this.movement["down"] && this.movement["right"]) {
      this.moveDown();
      this.moveRight();
    } else if (this.movement["down"] && this.movement["left"]) {
      this.moveDown();
      this.moveLeft();
    } else if (this.movement["up"]) {
      this.moveUp();
    } else if (this.movement["down"]) {
      this.moveDown();
    } else if (this.movement["left"]) {
      this.moveLeft();
    } else if (this.movement["right"]) {
      this.moveRight();
    }
  };
}
