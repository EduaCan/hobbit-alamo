class Disparo {
    constructor(destinoX, destinoY, origenX, origenY) {
    //todas las propiedades de la bola de fuego

    //imagen
    this.img = new Image();
    this.img.src = "../images/disparo.png";
    //tamaño
    this.w = 15;
    this.h = 15;
    //posicion
    this.x = origenX;
    this.y = origenY;
    //movimiento
    this.speed = 10  //velocidad a gusto

    this.deltaX = destinoX - this.x //diferencia coordenadas x
    this.deltaY = destinoY - this.y //diferencia coordenadas x

    this.hippo = Math.sqrt(Math.pow(this.deltaX, 2) + Math.pow(this.deltaY, 2)) //hipotenusa

    this.sin = this.deltaY / this.hippo //seno     (.) -
    this.cos = this.deltaX / this.hippo //coseno    - (.)

    this.composedSpeedX = this.speed * this.cos   //vector x
    this.composedSpeedY = this.speed * this.sin   //vector y
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