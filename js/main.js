// GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const gameScreen = document.querySelector("#game-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const loadingSpan = document.querySelector("#loading-span");
let scoreSpan = document.querySelector("#score-div span");

// SOUNDS
const splashMusic = document.querySelector("#splash-music");
const battleAudio = document.querySelector("#battle-audio");

let booleanEngine = true;
let intervalID;

//buttons
const startBtn = document.querySelector("#start-btn");
const replayBtn = document.querySelector("#replay-btn");
const homeBtn = document.querySelector("#home-btn");

//obj
let gameObj;

// STATE MANAGEMENT FUNCTIONS

const engineSelector = () => {
  if (booleanEngine === true) {
    booleanEngine = false;
    startGame();
  } else {
    booleanEngine = true;
    restartGame();
  }
};

const goHome = () => {
  gameOverScreen.style.display = "none";
  startScreen.style.display = "flex";
  canvas.style.display = "none";
  gameScreen.style.display = "none";
};

const startGame = () => {
  //ocultar splash screen
  //ocultar game-over screen
  splashMusic.pause();
  battleAudio.play();
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  //mostrar el canvas
  gameScreen.style.display = "block";
  canvas.style.display = "block";
  //crear de nuevo el juego
  gameObj = new Game();
  //iniciar el juego, metodo gameLoop()
  gameObj.gameLoop();
  //si hace falta, setTimeOut() o setInterval
  let intervalID = setInterval(() => {
    if (gameObj.isGameOn === false) {
      gameOver();
      clearInterval(intervalID);
      gameObj.losingAudio.cloneNode(true).play();
    }
  }, 2000);
};

const restartGame = () => {
  //ocultar splash screen
  //ocultar gameover-screen
  splashMusic.pause();
  battleAudio.play();
  gameOverScreen.style.display = "none";
  startScreen.style.display = "none";
  //mostrar el canvas
  canvas.style.display = "block";
  gameScreen.style.display = "block";
  //crear de nuevo el juego
  gameObj = new Game();
  //iniciar el juego, metodo gameLoop()
  gameObj.gameLoop();
  //si hace falta, setTimeOut() o setInterval
  let intervalID = setInterval(() => {
    if (gameObj.isGameOn === false) {
      gameOver();
      clearInterval(intervalID);
    }
  }, 2000);
};

const gameOver = () => {
  battleAudio.pause();
  gameOverScreen.style.display = "block";
  gameScreen.style.display = "none";
  startScreen.style.display = "none";
  canvas.style.display = "none";
  scoreSpan.innerText = gameObj.score * 10;
  //engineSelector()
};

disparar = (event) => {
  if (event.button === 0) {
    //console.log("click del mouse", gameObj);
      gameObj.disparar(event.offsetX, event.offsetY, gameObj.torre.cen);
  }
  //console.log(event.offsetX, event.offsetY)
};

// ADD EVENT LISTENERS

//boton play
startBtn.addEventListener("click", engineSelector);
//boton restart
replayBtn.addEventListener("click", engineSelector);
//boton home
homeBtn.addEventListener("click", goHome);

//loading
window.addEventListener("load", () => {
  //console.log("loaded");
  gameObj = new Game();
  startBtn.style.display = "block";
  loadingSpan.style.display = "none";
  //! splashMusic.play()  // lo quito para no volverme loco
});

//click disparo
window.addEventListener("mousedown", disparar);

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    gameObj.torre.movement["up"] = true;
    console.log(gameObj.torre.movement)
    //gameObj.movingTorre.cloneNode(true).play()
  } else if (event.code === "KeyS") {
    //gameObj.movingTorre.cloneNode(true).play()
    gameObj.torre.movement["down"] = true;
    console.log(gameObj.torre.movement)
  } else if (event.code === "KeyA") {
    //gameObj.movingTorre.cloneNode(true).play()
    gameObj.torre.movement["left"] = true;
    console.log(gameObj.torre.movement)
  } else if (event.code === "KeyD") {
    gameObj.torre.movement["right"] = true;
    console.log(gameObj.torre.movement)
    //gameObj.movingTorre.cloneNode(true).play()
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyW") {
    gameObj.torre.movement["up"] = false;
    console.log(gameObj.torre.movement)
    //gameObj.movingTorre.cloneNode(true).play()
  } else if (event.code === "KeyS") {
    //gameObj.movingTorre.cloneNode(true).play()
    gameObj.torre.movement["down"] = false;
    console.log(gameObj.torre.movement)
  } else if (event.code === "KeyA") {
    //gameObj.movingTorre.cloneNode(true).play()
    gameObj.torre.movement["left"] = false;
    console.log(gameObj.torre.movement)
  } else if (event.code === "KeyD") {
    gameObj.torre.movement["right"] = false;
    console.log(gameObj.torre.movement)
    //gameObj.movingTorre.cloneNode(true).play()
  }
})



//window.addEventListener("mouseup", clearInterval)
