class PowerUp {
    constructor(placeX, placeY, frames) {
        this.x = placeX
        this.y = placeY
        this.w = 15
        this.h = 15
        this.img = new Image()
        this.img.src = "./images/up-mushroom.png"
        this.initialFrame = frames
    }

    drawPowerUp = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };




}