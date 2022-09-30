class Disparo {
    constructor() {
    //todas las propiedades de la bola de fuego

    //imagen
    this.img = new Image();
    this.img.src = "../images/disparo.png";
    //tamaño
    this.w = 15;
    this.h = 15;
    //posicion
    this.x = 400;
    this.y = 300;
    }

    //metodos y acciones de la bola de fuego

    drawDisparo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}