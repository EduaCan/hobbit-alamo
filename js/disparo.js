class Disparo {
    constructor(destinoX, destinoY, origenX, origenY) {
    //todas las propiedades de la bola de fuego

    //imagen
    this.imgUp = new Image();
    this.imgUp.src = "./images/disparoup.png";
    this.imgRight = new Image();
    this.imgRight.src = "./images/disparoright.png";
    this.imgDown = new Image();
    this.imgDown.src = "./images/disparodown.png";
    this.imgLeft = new Image();
    this.imgLeft.src = "./images/disparoleft.png";
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
        if (this.sin >= 0 && this.sin >= Math.abs(this.cos)) { //down checked
            ctx.drawImage(this.imgDown, this.x, this.y, this.w, this.h)
        }else if (this.sin <= 0 && Math.abs(this.sin) >= Math.abs(this.cos)) { //up checked
            ctx.drawImage(this.imgUp, this.x, this.y, this.w, this.h)
        }else if (this.cos >= 0 && this.cos >= Math.abs(this.sin)) { //right checked
            ctx.drawImage(this.imgRight, this.x, this.y, this.w, this.h)
        }else if (this.cos <= 0 && Math.abs(this.cos) >= Math.abs(this.sin)) { //left checked
            ctx.drawImage(this.imgLeft, this.x, this.y, this.w, this.h)
        }
    }

    movimientoDisparo = () => {
        this.x = this.x + this.composedSpeedX
        this.y = this.y + this.composedSpeedY
    }
}   