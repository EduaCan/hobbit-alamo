// GLOBAL VARIABLES

const canvas =document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const gameScreen =  document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#gameover-screen")

let booleanEngine = true


//buttons
const startBtn = document.querySelector("#start-btn");
const replayBtn = document.querySelector("#replay-btn")
const homeBtn = document.querySelector("#home-btn")


//obj
let gameObj;




// STATE MANAGEMENT FUNCTIONS

const engineSelector = () => {
    if (booleanEngine === true){
        startGame()
        booleanEngine = false
    } else {
        restartGame()
        booleanEngine = true
    }
}

const goHome = () => {
    gameOverScreen.style.display = "none";
    startScreen.style.display = "flex";
    canvas.style.display = "none"
    gameScreen.style.display = "none"
}

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
    let intervalID = setInterval(() => {
        if (gameObj.isGameOn === false) {
            gameOver()
            clearInterval(intervalID)
        }
    }, 2000)
}

const restartGame = () => {
    //ocultar splash screen
    //ocultar gameover-screen
    gameOverScreen.style.display = "none";
    startScreen.style.display = "none";
    //mostrar el canvas
    gameScreen.style.display = "block"
    //crear de nuevo el juego
    gameObj = new Game();
    //iniciar el juego, metodo gameLoop()
    gameObj.gameLoop()
    //si hace falta, setTimeOut() o setInterval
    let intervalID = setInterval(() => {
        if (gameObj.isGameOn === false) {
            gameOver()
            clearInterval(intervalID)
        }
    }, 2000)
}

const gameOver = () => {
    gameOverScreen.style.display = "flex";
    gameScreen.style.display = "none"
    startScreen.style.display = "none";
    canvas.style.display = "none";
}

disparar = (event) => {
    if (event.button === 0) {
        //console.log("click del mouse", gameObj);
        gameObj.disparar(event.offsetX, event.offsetY)
      }
      //console.log(event.offsetX, event.offsetY)
   
}


// ADD EVENT LISTENERS

//boton play
startBtn.addEventListener("click", engineSelector)
//boton restart
replayBtn.addEventListener("click", engineSelector)
//boton home
homeBtn.addEventListener("click", goHome)

window.addEventListener('load', () => {
    console.log("loaded");
    gameObj = new Game()
});

//click disparo
window.addEventListener("mousedown", disparar);
