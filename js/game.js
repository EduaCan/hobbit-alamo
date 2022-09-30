class Game {
    constructor() {
        //todas las propiedades o elementos del juego

        //torre
        this.torre = new Torre()
        //enemigos
        //this.enemy = new Enemy();
        this.enemyArray = []
        //fondo
        this.fondo = new Image();
        this.fondo.src = "../images/background.png"
        //disparos
        //this.disparo = new Disparo()
        this.disparoArray = []
        //frames
        this.frames = 0
    }

    //todos los metodos y acciones del juego

    //dibujado del fondo
    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
    }

    //crear enemigos
    generarEnemy = () => {
        if (this.frames % 60 === 0) {
            let nuevoEnemy =  new Enemy()
            this.enemyArray.push(nuevoEnemy)
        }
    }

    //colision enemigos con torre
    //crear disparos
    disparar = () => {
       let nuevoDisparo = new Disparo()
       this.disparoArray.push(nuevoDisparo)
    }
    //colision disparos con enemigos
    colisionDisparoEnemy = () => {
        this.enemyArray.forEach( (eachEnemy) => {
            this.disparoArray.forEach( (eachDisparo) => {
                if (eachEnemy.x < eachDisparo.x + eachDisparo.w &&
                    eachEnemy.x + eachEnemy.w > eachDisparo.x &&
                    eachEnemy.y < eachDisparo.y + eachDisparo.h &&
                    eachEnemy.h + eachEnemy.y > eachDisparo.y) {
                    let deadEnemy = this.enemyArray.indexOf(eachEnemy)
                    let deadDisaparo = this.disparoArray.indexOf(eachDisparo)
                    this.enemyArray.splice(deadEnemy, 1)
                    this.disparoArray.splice(deadDisaparo, 1)
                }
            })
        })

    }
    //fin del juego
    //puntuación



    gameLoop = () => {
        //0 frames
        this.frames = this.frames + 1
        //console.log("frames:", this.frames)
        //console.log(this.enemyArray)
        //1 limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.heigth)
        //2 acciones y movimientos de los elementos
        this.generarEnemy()
        this.enemyArray.forEach( (eachEnemy) => {
            eachEnemy.movimientoEnemy()
        })
        this.disparoArray.forEach( (eachDisparo) => {
            eachDisparo.movimientoDisparo()
        })
        this.colisionDisparoEnemy()
        //3 dibujado de los elementos
        this.drawFondo()
        this.torre.drawTorre()
        this.enemyArray.forEach( (eachEnemy) => {
            eachEnemy.drawEnemy()
        })
        this.disparoArray.forEach( (eachDisparo) => {
            eachDisparo.drawDisparo()
        })
        //this.disparo.drawDisparo()
        //4 control de recursion
        requestAnimationFrame(this.gameLoop)
    }



}