// GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const gameScreen = document.querySelector("#game-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const loadingSpan = document.querySelector("#loading-span");
const scoreSpan = document.querySelector("#score-div span");
const nameInput = document.querySelector("#name-input");
const scoreNameUl = document.querySelector("#score-name-ul");
const scoreNumberUl = document.querySelector("#score-number-ul");

// SOUNDS
const splashMusic = document.querySelector("#splash-music");
const battleAudio = document.querySelector("#battle-audio");
const gameOverMusic = document.querySelector("#gameover-music");

splashMusic.volume = 0.01;
battleAudio.volume = 0.01;
gameOverMusic.volume = 0.01;

let booleanEngine = true;
let intervalIDgameover;
let intervalIDgameoverScreen;

//buttons
const startBtn = document.querySelector("#start-btn");
const replayBtn = document.querySelector("#replay-btn");
const homeBtn = document.querySelector("#home-btn");

//obj
let gameObj;

// STATE MANAGEMENT FUNCTIONS

//va guardando el nombre y puntuacion,
// o lo borra introduciendo un nombre concreto
const saveLocalStorage = () => {
  localStorage.setItem(nameInput.value, Math.floor(gameObj.score * 10));
  if (nameInput.value === "6969A6969") {
    localStorage.clear();
  }
};

//ordena la lista de partidas por puentuacion y lo muestra en el DOM
const showRanking = () => {
  let rankingArr = [];
  scoreNameUl.innerHTML = "";
  scoreNumberUl.innerHTML = "";

  for (let item in localStorage) {
    rankingArr.push([item, localStorage[item]]);
  }
  rankingArr.splice(-6); //quito las propiedades que vienen por defecto
  rankingArr.sort((elem2, elem1) => {
    if (Number(elem2[1]) > Number(elem1[1])) {
      return -1;
    } else if (Number(elem1[1]) > Number(elem2[1])) {
      return 1;
    } else {
      return 0;
    }
  });
  for (let iteration = 0; iteration < rankingArr.length; iteration++) {
    if (rankingArr[iteration][0] !== "loglevel") {
      if (rankingArr[iteration][0] === "") {
        scoreNameUl.innerHTML += `<li>Unn4m3d</li>`;
        scoreNumberUl.innerHTML += `<li>${rankingArr[iteration][1]}</li>`;
      } else {
        scoreNameUl.innerHTML += `<li>${rankingArr[iteration][0]}</li>`;
        scoreNumberUl.innerHTML += `<li>${rankingArr[iteration][1]}</li>`;
      }
    }
    if (iteration > 9) {
      break;
    }
  }
};

//para alternar las dos funciones que inician el juego
const engineSelector = () => {
  if (booleanEngine === true) {
    booleanEngine = false;
    startGame();
  } else {
    booleanEngine = true;
    restartGame();
  }
};

//va a splash screen
const goHome = () => {
  gameOverMusic.pause();
  splashMusic.play();
  gameOverScreen.style.display = "none";
  startScreen.style.display = "flex";
  canvas.style.display = "none";
  gameScreen.style.display = "none";
};

//va a la pantalla del juego
const startGame = () => {
  //ocultar splash screen
  //ocultar game-over screen
  gameOverMusic.pause();
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
  let intervalIDgameover = setInterval(() => {
    if (gameObj.isGameOn === false) {
      gameOver();
      clearInterval(intervalIDgameover);
      let losingAudioClone = gameObj.losingAudio.cloneNode(true);
      losingAudioClone.volume = 0.01;
      losingAudioClone.play();
    }
  }, 2300);
};

//va a la pantalla del juego
const restartGame = () => {
  //ocultar splash screen
  //ocultar gameover-screen
  gameOverMusic.pause();
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
  let intervalIDgameover = setInterval(() => {
    if (gameObj.isGameOn === false) {
      gameOver();
      clearInterval(intervalIDgameover);
    }
  }, 2000);
};

//va a la pantalla gameover
const gameOver = () => {
  saveLocalStorage();
  battleAudio.pause();
  intervalIDgameoverScreen = setInterval(() => {
    gameOverMusic.play();
    clearInterval(intervalIDgameoverScreen);
  }, 2000);
  gameOverScreen.style.display = "block";
  gameScreen.style.display = "none";
  startScreen.style.display = "none";
  canvas.style.display = "none";
  scoreSpan.innerText = Math.floor(gameObj.score * 10);
  showRanking();
};

//pasa los paramentros del event a la funcion de disparo
disparar = (event) => {
  if (event.button === 0) {
    gameObj.disparar(event.offsetX, event.offsetY, gameObj.torre.cen);
  }
};

// ADD EVENT LISTENERS

//boton play
startBtn.addEventListener("click", engineSelector);
//boton restart
replayBtn.addEventListener("click", engineSelector);
//boton home
homeBtn.addEventListener("click", goHome);
//input name
nameInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    startBtn.click();
  }
});

//loading
window.addEventListener("load", () => {
  gameObj = new Game();
  startBtn.style.display = "block";
  nameInput.style.display = "block";
  loadingSpan.style.display = "none";
  goHome();
});

//click disparo
window.addEventListener("mousedown", disparar);

//movimientos torre
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    gameObj.torre.movement["up"] = true;
  } else if (event.code === "KeyS") {
    gameObj.torre.movement["down"] = true;
  } else if (event.code === "KeyA") {
    gameObj.torre.movement["left"] = true;
  } else if (event.code === "KeyD") {
    gameObj.torre.movement["right"] = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyW") {
    gameObj.torre.movement["up"] = false;
  } else if (event.code === "KeyS") {
    gameObj.torre.movement["down"] = false;
  } else if (event.code === "KeyA") {
    gameObj.torre.movement["left"] = false;
  } else if (event.code === "KeyD") {
    gameObj.torre.movement["right"] = false;
  }
});
