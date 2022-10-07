
# THE ALAMO OF THE HOBBITS!


## [See the Game](www.your-url-here.com)

# Description

Una torre situada en el centro inferior del mapa va disparando a enemigos que se acercan desde el borde superior. Dirigiendo los disparos con el puntero del ratón, esquivando los enemigos con el teclado y ganando puntos con cada una de sus muertes. Con un aspecto pixel art y referencias a la obra The Lord of the Rings.

# Main Functionalities

- Enemigos aparecen en el borde del canvas y se acercan a la torre.
- Disparos de la torre dirigidos con el puntero del ratón.
- Muerte de los enemigos tras impacto de los disparos y de la torre al entrar en contacto con los enemigos.
- Fin del juego al ser la torre destruida, al perder las 3 vidas.
- Con la muerte de los enemigos van apareciendo power ups y bonus.
- Ranking con las mejores partidas jugadas.

# Backlog Functionalities

- Tanto la torre como los enemigos seguirán una temática del señor de los anillos.
- Muchos sonidos divertidos y emojis para darle un toque de humor.

# Proyect Structure

- main.js para controlar el DOM y event listeners.
- game.js para las funciones principales del juego.
- tower.js para la class de la torre central/jugador.
- enemy.js para la class de los enemigos.
- disparo.js para la class de los proyectiles.
- powerup.js para la class de los power Up's

## main.js

- saveLocalStorage() {}
- showRanking() {}
- engineSelector() {}
- startGame() {}
- restartGame() {}
- goHome() {}
- gameOver() {}
- disparar(event) {}

## game.js
- Game() {
    this.torre;
    this.enemyArray;
    this.cadaverArray;
    this.fondo;
    this.disparoArray;
    this.frames;
    this.score;
    this.level;
    this.isGameOn;
    this.lifes;
    this.heartArray;
    this.powerUpArray;
}
- drawFondo() {}
- generarEnemy() {}
- colisionEnemyTorre() {}
- colisionCadaverTorre() {}
- disparar(destinoX, destinoY) {}
- colisionDisparoEnemy() {}
- colisionDisparoPowerUp() {}
- getALife() {}
- gameOver() {}
- getScore(isCadaver) {}
- printScore() {}
- getLevel() {}
- stayingAlive() {}
- gameLoop() {}

## torre.js 

- torre () {
    this.img;
    this.img1R;
    this.img2R;
    this.img3R;
    this.hobbitImgArrayR;
    this.img1L;
    this.img2L;
    this.img3L;
    this.hobbitImgArrayL;
    this.img1U;
    this.img2U;
    this.img3U;
    this.hobbitImgArrayU;
    this.imgControl;
    this.direction;
    this.w;
    this.h;
    this.speed;
    this.x;
    this.y;
    this.centroTorreX;
    this.centroTorreY;
    this.movement;
}
- drawTorre() {}
- drawHobbits(frames, direction) {}
- moveUp() {}
- moveDown() {}
- moveRight() {}
- moveLeft() {}
- moveTorre() {}

## enemy.js 

- enemy(destinoX, destinoY, difficulty) {
    this.img1;
    this.img2;
    this.img3;
    this.imgArray;
    this.imgControl;
    this.imageCadaver;
    this.w;
    this.h;
    this.randomNumberX;
    this.x;
    this.y;
    this.speed;
    this.deltaX;
    this.deltaY;
    this.hippo;
    this.sin;
    this.cos;
    this.composedSpeedX;
    this.composedSpeedY;
    this.isCadaver;
    this.frames;
}
- drawEnemy(frames) {}
- movimientoEnemy() {}
- setCadaver() {}

## disparo.js

- disparo(destinoX, destinoY, origenX, origenY) {
    this.imgUp;
    this.imgRight;
    this.imgDown;
    this.imgLeft;
    this.w;
    this.h;
    this.x;
    this.y;
    this.speed;
    this.deltaX;
    this.deltaY;
    this.hippo;
    this.sin;
    this.cos;
    this.composedSpeedX;
    this.composedSpeedY;
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
[Link](https://trello.com/b/gyDYAELw/hobbit-alamo)

### Slides
[Link](www.your-url-here.com)