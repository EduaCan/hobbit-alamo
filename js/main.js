// GLOBAL VARIABLES

const canvas =document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const gameScreen =  document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#gameover-screen")
//let startBtnContainer = document.querySelector("#start-btn-div")
const loadingSpan = document.querySelector("#loading-span")
const splashMusic = document.querySelector("#splash-music")
let scoreSpan = document.querySelector("#score-div span")

let booleanEngine = true
let intervalID

//buttons
const startBtn = document.querySelector("#start-btn");
const replayBtn = document.querySelector("#replay-btn")
const homeBtn = document.querySelector("#home-btn")

//obj
let gameObj;

// STATE MANAGEMENT FUNCTIONS

const engineSelector = () => {
    if (booleanEngine === true){
        booleanEngine = false
        startGame()
    } else {
        booleanEngine = true
        restartGame()
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
    splashMusic.play()
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    //mostrar el canvas
    gameScreen.style.display = "block"
    canvas.style.display = "block"
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
    splashMusic.play()
    gameOverScreen.style.display = "none";
    startScreen.style.display = "none";
    //mostrar el canvas
    canvas.style.display = "block"
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
    gameOverScreen.style.display = "block";
    gameScreen.style.display = "none"
    startScreen.style.display = "none";
    canvas.style.display = "none";
    scoreSpan.innerText = gameObj.score * 10;
    //engineSelector()
}

disparar = (event) => {
    if (event.button === 0) {
        //console.log("click del mouse", gameObj);
        gameObj.disparar(event.offsetX, event.offsetY, gameObj.torre.cen)
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

//loading
window.addEventListener('load', () => {
    //console.log("loaded");
    gameObj = new Game()
    startBtn.style.display = "block"
    loadingSpan.style.display = "none"
});

//click disparo
window.addEventListener("mousedown", disparar);

window.addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
        console.log("torre move")
        gameObj.torre.moveTor("up")
    } else if (event.code === "KeyS") {
        console.log("torre move")
        gameObj.torre.moveTor("down")
    } else if (event.code === "KeyA") {
        console.log("torre move")
        gameObj.torre.moveTor("left")
    } else if (event.code === "KeyD") {
        console.log("torre move")
        gameObj.torre.moveTor("right")
    }
})

//window.addEventListener("mouseup", clearInterval)
