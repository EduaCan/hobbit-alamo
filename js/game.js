class Game {
  constructor() {
    //todas las propiedades o elementos del juego

    //torre
    this.torre = new Torre();
    //this.centroTorreX = this.torre.x + this.torre.w / 2;
    //this.centroTorreY = this.torre.y + this.torre.h / 2;
    //enemigos
    //this.enemy = new Enemy();
    this.enemyArray = [];
    //fondo
    this.fondo = new Image();
    this.fondo.src = "../images/background.png";
    //disparos
    //this.disparo = new Disparo()
    this.disparoArray = [];
    //frames
    this.frames = 0;
    //puntuacion
    this.score = 0;
    this.level = 1;
    //gameOver
    this.isGameOn = true;
    this.lives = 3;
    this.heartArray = ["❤️", "❤️", "❤️"]
  }

  //todos los metodos y acciones del juego

  //dibujado del fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  //crear enemigos
  generarEnemy = (destinoX, destinoY) => {
    if (this.frames % 20 === 0) {
      let nuevoEnemy = new Enemy(destinoX, destinoY, this.level);
      this.enemyArray.push(nuevoEnemy);
    }
  };

  //colision enemigos con torre
  colisionEnemyTorre = () => {
    this.enemyArray.forEach((eachEnemy) => {
      if (
        eachEnemy.x < this.torre.x + this.torre.w &&
        eachEnemy.x + eachEnemy.w > this.torre.x &&
        eachEnemy.y < this.torre.y + this.torre.h &&
        eachEnemy.h + eachEnemy.y > this.torre.y
      ) {
        let deadEnemy = this.enemyArray.indexOf(eachEnemy);
        this.enemyArray.splice(deadEnemy, 1);
        this.lives--;
        this.heartArray.pop()
        if (this.lives === 0) {
          this.gameOver();
        }
        //console.log("game on", this.isGameOn,"lives", this.lives);
      }
    });
  };

  //crear disparos
  disparar = (destinoX, destinoY) => {
    let nuevoDisparo = new Disparo(destinoX, destinoY, this.torre.centroTorreX, this.torre.centroTorreY);
    this.disparoArray.push(nuevoDisparo);
    console.log("centroTorre", this.torre.centroTorreX, this.torre.centroTorreY)
  };

  //colision disparos con enemigos
  colisionDisparoEnemy = () => {
    this.enemyArray.forEach((eachEnemy) => {
      this.disparoArray.forEach((eachDisparo) => {
        if (
          eachEnemy.x < eachDisparo.x + eachDisparo.w &&
          eachEnemy.x + eachEnemy.w > eachDisparo.x &&
          eachEnemy.y < eachDisparo.y + eachDisparo.h &&
          eachEnemy.h + eachEnemy.y > eachDisparo.y
        ) {
          let deadEnemy = this.enemyArray.indexOf(eachEnemy);
          let deadDisaparo = this.disparoArray.indexOf(eachDisparo);
          this.enemyArray.splice(deadEnemy, 1);
          this.disparoArray.splice(deadDisaparo, 1);
          this.getScore();
          this.getLevel();
          console.log("score", this.score, "level", this.level);
        }
      });
    });
  };

  //fin del juego
  gameOver = () => {
    this.isGameOn = false;
  };

  //puntuación
  getScore = () => {
    this.score = this.score + 1;
  };

  //niveles
  getLevel = () => {
    if (this.score < 10) {
        this.level = 1
    }else{
        if (this.score % 10 === 0) {
          this.level = this.score / 10;
        }
    }
  };

  //vidas
  stayingAlive = () => {
    ctx.font = '20px serif';
    ctx.fillText(`${this.heartArray}`, 10, 20);
  }

  //gameLoop
  gameLoop = () => {
    //0 frames
    this.frames = this.frames + 1;
    //console.log("frames:", this.frames)
    //console.log(this.enemyArray)

    //1 limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);

    //2 acciones y movimientos de los elementos
    this.generarEnemy(this.torre.centroTorreX, this.torre.centroTorreY);
    this.enemyArray.forEach((eachEnemy) => {
      eachEnemy.movimientoEnemy();
    });
    this.disparoArray.forEach((eachDisparo) => {
      eachDisparo.movimientoDisparo();
    });
    this.colisionDisparoEnemy();
    this.colisionEnemyTorre();

    //3 dibujado de los elementos
    this.drawFondo();
    this.torre.drawTorre();
    this.enemyArray.forEach((eachEnemy) => {
      eachEnemy.drawEnemy(this.frames);
    });
    this.disparoArray.forEach((eachDisparo) => {
      eachDisparo.drawDisparo();
    });
    this.stayingAlive()
    //this.disparo.drawDisparo()

    //4 control de recursion
    if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
    }
  };
}
