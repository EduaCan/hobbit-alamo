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
    this.cadaverArray = []; //! acuerdate de quitarlo
    //fondo
    this.fondo = new Image();
    this.fondo.src = "./images/background.png";
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
    this.lifes = 3;
    this.heartArray = ["❤️", "❤️", "❤️"];
    //powerUps
    this.powerUpArray = [];
    //sonidos
    this.losingAudio = new Audio("./sounds/mixkit-trombone-disappoint-744.wav");
    this.shootAudio = new Audio(
      "./sounds/mixkit-funny-squeaky-toy-hits-2813.wav"
    );
    this.orcLaught = new Audio(
      "./sounds/mixkit-creepy-little-creature-2873.mp3"
    );
    this.orcDeath = new Audio("./sounds/mixkit-cartoon-fart-or-splat-3056.mp3");
    this.movingTorre = new Audio(
      "./sounds/mixkit-falling-into-mud-surface-385.wav"
    );
    this.movingTorre.volume = 0.1;
    this.getPowerUp = new Audio("./sounds/mixkit-drum-joke-accent-579.wav");
    this.getShitSound = new Audio("./sounds/mixkit-hard-pop-click-2364.wav");
  }

  //todos los metodos y acciones del juego

  //dibujado del fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  //crear enemigos
  generarEnemy = (destinoX, destinoY) => {
    if (this.frames % 10 === 0) {
      let nuevoEnemy = new Enemy(destinoX, destinoY, this.level);
      this.enemyArray.push(nuevoEnemy);
    }
  };

  //colision enemigos con torre
  colisionEnemyTorre = () => {
    this.enemyArray.forEach((eachEnemy) => {
      //con enemigos vivos, aún
      if (
        eachEnemy.x < this.torre.x + this.torre.w &&
        eachEnemy.x + eachEnemy.w > this.torre.x &&
        eachEnemy.y < this.torre.y + this.torre.h &&
        eachEnemy.h + eachEnemy.y > this.torre.y &&
        !eachEnemy.isCadaver
      ) {
        let deadEnemy = this.enemyArray.indexOf(eachEnemy);
        this.enemyArray.splice(deadEnemy, 1);
        this.lifes--;
        this.heartArray.pop();
        this.orcLaught.cloneNode(true).play();
        if (this.lifes === 0) {
          this.gameOver();
        }
        //console.log("game on", this.isGameOn,"lifes", this.lifes);
      }
    });
  };

  colisionCadaverTorre = () => {
    this.cadaverArray.forEach((eachCadaver) => {
      if (
        eachCadaver.x < this.torre.x + this.torre.w && //con cadaveres
        eachCadaver.x + eachCadaver.w > this.torre.x &&
        eachCadaver.y < this.torre.y + this.torre.h &&
        eachCadaver.h + eachCadaver.y > this.torre.y
      ) {
        let stepShit = this.cadaverArray.indexOf(eachCadaver);
        this.cadaverArray.splice(stepShit, 1);
        this.getShitSound.cloneNode(true).play();
        this.getScore(!eachCadaver.isCadaver);
        //console.log("shiiiiit!")
      }
    });
  };

  //crear disparos
  disparar = (destinoX, destinoY) => {
    let nuevoDisparo = new Disparo(
      destinoX,
      destinoY,
      this.torre.centroTorreX,
      this.torre.centroTorreY
    );
    this.disparoArray.push(nuevoDisparo);
    if (canvas.style.display === "block") {
      this.shootAudio.cloneNode(true).play();
    }
    //console.log("centroTorre", this.torre.centroTorreX, this.torre.centroTorreY)
  };

  //colision disparos con enemigos
  colisionDisparoEnemy = () => {
    this.enemyArray.forEach((eachEnemy) => {
      this.disparoArray.forEach((eachDisparo) => {
        if (
          eachEnemy.x < eachDisparo.x + eachDisparo.w &&
          eachEnemy.x + eachEnemy.w > eachDisparo.x &&
          eachEnemy.y < eachDisparo.y + eachDisparo.h &&
          eachEnemy.h + eachEnemy.y > eachDisparo.y &&
          !eachEnemy.isCadaver
        ) {
          let deadEnemy = this.enemyArray.indexOf(eachEnemy);
          let deadDisaparo = this.disparoArray.indexOf(eachDisparo);
          if (Math.floor(Math.random() * (5 + this.level)) === 0) {
            let newPowerUp = new PowerUp(
              this.enemyArray[deadEnemy].x,
              this.enemyArray[deadEnemy].y,
              this.frames
            );
            this.powerUpArray.push(newPowerUp);
          }
          this.enemyArray[deadEnemy].setCadaver(this.frames);
          this.cadaverArray.push(this.enemyArray[deadEnemy]);
          this.enemyArray.splice(deadEnemy, 1);
          this.disparoArray.splice(deadDisaparo, 1);
          this.getScore(true);
          this.getLevel();
          //console.log("score", this.score, "level", this.level);
          this.orcDeath.cloneNode(true).play();
        }
      });
    });
  };

  //collision disparos con powerUp
  colisionDisparoPowerUp = () => {
    this.powerUpArray.forEach((eachPowerUp) => {
      this.disparoArray.forEach((eachDisparo) => {
        if (
          eachPowerUp.x < eachDisparo.x + eachDisparo.w &&
          eachPowerUp.x + eachPowerUp.w > eachDisparo.x &&
          eachPowerUp.y < eachDisparo.y + eachDisparo.h &&
          eachPowerUp.h + eachPowerUp.y > eachDisparo.y
        ) {
          let deadPowerUp = this.powerUpArray.indexOf(eachPowerUp);
          let deadDisparo = this.disparoArray.indexOf(eachDisparo);
          this.powerUpArray.splice(deadPowerUp, 1);
          this.disparoArray.splice(deadDisparo, 1);
          this.getALife();
          //console.log("score", this.score, "level", this.level);
          this.getPowerUp.cloneNode(true).play();
        }
      });
    });
  };

  //ganas vida con powerUp
  getALife = () => {
    if (Math.floor(Math.random() * 6) === 0) {
      this.heartArray.push("💩");
    } else {
      this.heartArray.push("❤️");
    }
    this.lifes = this.lifes + 1;
  };

  //fin del juego
  gameOver = () => {
    this.isGameOn = false;
  };

  //puntuación
  getScore = (isCadaver) => {
    if (isCadaver) {
      this.score = this.score + 1;
    } else {
      this.score = this.score + 0.1;
    }
  };

  printScore = () => {
    ctx.font = "20px serif";
    ctx.fillText(
      `Score ${Math.floor(this.score * 10)}`,
      canvas.width - 100,
      20
    );
  };

  //niveles
  getLevel = () => {
    if (this.score < 10) {
      this.level = 1;
    } else {
      if (Math.floor(this.score) % 10 === 0) {
        this.level = Math.floor(this.score / 10);
        console.log("level", this.level)
      }
    }
  };

  //vidas
  stayingAlive = () => {
    ctx.font = "20px serif";
    ctx.fillText(`${this.heartArray}`, 10, 20);
  };

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
    this.colisionDisparoPowerUp();
    this.colisionCadaverTorre()
    this.torre.moveTorre();

    //3 dibujado de los elementos
    this.drawFondo();
    this.enemyArray.forEach((eachEnemy) => {
      eachEnemy.drawEnemy(this.frames);
    });
    this.cadaverArray.forEach((eachCadaver) => {
      eachCadaver.drawEnemy(this.frames);
      if (this.frames - eachCadaver.frames >= 300) {
        this.cadaverArray.shift();
      }
    });
    this.disparoArray.forEach((eachDisparo) => {
      eachDisparo.drawDisparo();
    });
    this.powerUpArray.forEach((eachPowerUp) => {
      eachPowerUp.drawPowerUp();
      //let indexPowerUp = this.powerUpArray.indexOf(eachPowerUp)
      if (this.frames - eachPowerUp.initialFrame >= 300) {
        this.powerUpArray.shift();
      }
    });
    this.torre.drawTorre();
    this.torre.drawHobbits(this.frames, this.torre.direction);
    this.stayingAlive();
    this.printScore();
    //this.disparo.drawDisparo()

    //4 control de recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
