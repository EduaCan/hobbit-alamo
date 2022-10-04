NOTE: to copy this readme structure simply click on RAW on the top right of this gist. There you have the content in the basic Markdown syntax used in readme files. Then paste it on a README.md file in your repository. Always do this directly from VS code, not from github.

# THE ALAMO OF THE HOBBITS!


## [See the Game](www.your-url-here.com)
NOTE: above link will be added later

# Description

Una torre situada en el centro inferior del mapa va disparando a enemigos que se acercan desde el borde superior. Dirigiendo los disparos con el puntero del ratón y ganando puntos con cada una de sus muertes. Con un aspecto pixel art que retira a la cultura "Pop".

# Main Functionalities

- Enemigos aparecen en el borde del canvas y se acercan a la torre.
- Disparos de la torre dirigidos con el puntero del ratón.
- Muerte de los enemigos tras impacto y de la torre al entrar en contacto con los enemigos.
- Fin del juego al ser la torre destruida, al perder las 3 vidas.

# Backlog Functionalities

- Tanto la torre como los enemigos seguirán una temática del señor de los anillos.
- Muchos sonidos divertidos para darle un toque de humor.

# Proyect Structure

- main.js para controlar el DOM y event listeners.
- game.js para las funciones principales del juego.
- tower.js para la class de la torre central/jugador.
- enemy.js para la class de los enemigos.
- disparo.js para la class de los proyectiles.
- powerup.js para la class de los power Up's

## main.js

- startGame() {}
- restartGame() {}
- goHome() {}
- gameOver() {}
- disparar(event) {}

## game.js
- Game() {
    this.torre;
    this.enemyArray;
    this.fondo;
    this.disparoArray;
    this.frames;
    this.score;
    this.level;
    this.isGameOn;
    this.lives;
    this.heartArray;
}
- drawFondo() {}
- generarEnemy() {}
- colisionEnemyTorre() {}
- disparar(destinoX, destinoY) {}
- colisionDisparoEnemy() {}
- colisionDisparoPowerUp() {}
- getALife() {}
- gameOver() {}
- getScore() {}
- printScore() {}
- getLevel() {}
- stayingAlive() {}
- gameLoop() {}

## player.js 

- torre () {
    this.img
    this.img1R
    this.img2R
    this.img3R
    this.hobbitImgArrayR
    this.img1L
    this.img2L
    this.img3L
    this.hobbitImgArrayL
    this.imgControl
    this.directionR
    this.w
    this.h
    this.speed
    this.x
    this.y
    this.centroTorreX
    this.centroTorreY
}
- drawTorre() {}
- drawHobbits(frames, directionR) {}
-moveTor(direction) {}

## enemy.js 

- enemy(destinoX, destinoY, difficulty) {
    this.img1
    this.img2
    this.img3
    this.imgArray
    this.imgControl
    this.w
    this.h
    this.randomNumberX
    this.x
    this.y
    this.speed
    this.deltaX
    this.deltaY
    this.hippo
    this.sin
    this.cos
    this.composedSpeedX
    this.composedSpeedY
}
- drawEnemy(frames) {}
- movimientoEnemy() {}

## disparo.js

- disparo(destinoX, destinoY, origenX, origenY) {
    this.img
    this.w
    this.h
    this.x
    this.y
    this.speed
    this.deltaX
    this.deltaY
    this.hippo
    this.sin
    this.cos
    this.composedSpeedX
    this.composedSpeedY
}
- drawDisparo() {}
- movimientoDisparo() {}

## powerup.js

powerUp(placeX, placeY, frames) {
    this.x
    this.y
    this.w
    this.h
    this.img
    this.initialFrame
}
- drawPowerUp

# States and Transitions

- Splash screen.
- Game screen.
- GameOver screen

# Extra Links (The links can be added later when available)

### Trello
[Link](www.your-url-here.com)

### Slides
[Link](www.your-url-here.com)