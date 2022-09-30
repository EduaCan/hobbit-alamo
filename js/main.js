// GLOBAL VARIABLES

const canvas =document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const gameScreen =  document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#gameover-screen")


//buttons
const startBtn = document.querySelector("#start-btn");
const replayBtn = document.querySelector("#replayBtn")
const homeBtn = document.querySelector("#home-btn")


//obj
let gameObj;




// STATE MANAGEMENT FUNCTIONS

const startGame = () => {
    //ocultar splash screen
    //ocultar game-over screen
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    //mostrar el canvas
    gameScreen.style.display = "block"
    //crear de nuevo el juego
    gameObj = new Game();
    //iniciar el juego, metodo gameLoop()
    gameObj.gameLoop()
    //si hace falta, setTimeOut() o setInterval
}

const restartGame = () => {
    //ocultar gameover-screen
    startScreen.style.display = "none";
    //mostrar el canvas
    canvas.style.display = "block"
    //crear de nuevo el juego
    //iniciar el juego, metodo gameLoop()
    //si hace falta, setTimeOut() o setInterval
}




// ADD EVENT LISTENERS

//boton play
startBtn.addEventListener("click", startGame)
//boton restart
//boton home
//click disparo


window.addEventListener('load', () => {
    console.log(gameObj);
});
