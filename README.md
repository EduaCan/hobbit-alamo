NOTE: to copy this readme structure simply click on RAW on the top right of this gist. There you have the content in the basic Markdown syntax used in readme files. Then paste it on a README.md file in your repository. Always do this directly from VS code, not from github.

# ME QUEDO SOLO!


## [See the Game](www.your-url-here.com)
NOTE: above link will be added later

# Description

Una torre inmovil situada en el centro del mapa va disparando a enemigos que se acercan desde el borde. Dirigiendo los disparos con el puntero del ratón y ganando puntos con cada una de sus muertes que luego podrás invertir en mejoras. Con un aspecto que retira a la cultura "Pop".

# Main Functionalities

- Enemigos aparecen en el borde del canvas y se acercan a la torre.
- Disparos de la torre dirigidos con el puntero del ratón.
- Muerte de los enemigos tras impacto y de la torre al entrar en contacto con los enemigos.
- Fin del juego al ser la torre destruida.

# Backlog Functionalities

- Tanto la torre como los enemigos seguirán una temática Pop, de películas, series, videojuegos, etc.
- Los enemigos explotan o dejan cadaveres.

# Proyect Structure

- main.js para controlar el DOM.
- game.js para las funciones principales del juego.
- tower.js para la class de la torre central/jugador
- enemy.js para la class de los enemigos

Example:

## main.js

- startGame()
- restartGame()

## game.js

- Game () {
    this.player;
}
- gameLoop () {}
- checkCollisions () {}

## player.js 

- Player () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawPlayer () {}
- movePlayer () {}

# States and Transitions

- List here the different pages your game will have. For example: Start Screen, Game Screen, Win Screen, etc.

# Tasks (Optional)

- List of individual Tasks you will need to finish the game from zero to an amazing game!
- Note: If using Trello or github proyect to keep track of tasks, then you can remove this section.

# Extra Links (The links can be added later when available)

### Trello
[Link](www.your-url-here.com)

### Slides
[Link](www.your-url-here.com)