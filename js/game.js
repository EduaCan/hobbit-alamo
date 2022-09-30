class Game {
    constructor() {
        //todas las propiedades o elementos del juego

        //torre
        this.torre = new Torre()
        //enemigos
        this.enemy = new Enemy();
        //fondo
        this.fondo = new Image();
        this.fondo.src = "../images/background.png"
        //disparos
        this.disparo = new Disparo()
    }

    //todos los metodos y acciones del juego

    //dibujado del fondo
    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
    }

    //movimiento enemigos
    //colision enemigos con torre
    //movimiento disparos
    //colision disparos con enemigos
    //fin del juego
    //puntuación



    gameLoop = () => {
        //1 limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.heigth)
        //2 acciones y movimientos de los elementos
        //3 dibujado de los elementos
        this.drawFondo()
        this.torre.drawTorre()
        this.enemy.drawEnemy()
        this.disparo.drawDisparo()
        //4 control de recursion
        requestAnimationFrame(this.gameLoop)
    }



}