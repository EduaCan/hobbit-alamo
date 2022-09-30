class Disparo {
    constructor(destinoX, destinoY) {
    //todas las propiedades de la bola de fuego

    //imagen
    this.img = new Image();
    this.img.src = "../images/disparo.png";
    //tamaño
    this.w = 15;
    this.h = 15;
    //posicion
    this.x = canvas.width/2;
    this.y = canvas.height - 50;
    //movimiento
    this.speed = 10

    this.deltaX = destinoX - this.x
    this.deltaY = destinoY - this.y

    this.hippo = Math.sqrt(Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2))

    this.sin = this.deltaY / this.hippo
    this.cos = this.deltaX / this.hippo

    this.composedSpeedX = this.speed * this.cos
    this.composedSpeedY = this.speed * this.sin
    }

    //metodos y acciones de la bola de fuego

    drawDisparo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    movimientoDisparo = () => {
        this.x = this.x + this.composedSpeedX
        this.y = this.y + this.composedSpeedY
    }
}   