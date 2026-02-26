class MovabaleObject extends DrawableObject {
  speed = 0.15;
  otherdirection = false;
  speedY = 0;
  acceleration = 2.1;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 180;
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
  isColliding(movableObject) {
    return (
      this.x + this.width > movableObject.x && // R -> L
      this.y + this.height > movableObject.y && // T -> B
      this.x < movableObject.x && // L -> R
      this.y < movableObject.y + movableObject.height // B -> T
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      // Speichert Zeit seit letztem hit
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // difference in ms
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  isColliding2(movableObject) {
    return (
      this.x + this.width - this.offset.right >
        movableObject.x + movableObject.offset.left && // R -> L
      this.y + this.height - this.offset.bottom >
        movableObject.y + movableObject.offset.top && // T -> B
      this.x + this.offset.left <
        movableObject.x + movableObject.width - movableObject.offset.right && // L -> R
      this.y + this.offset.top <
        movableObject.y + movableObject.height - movableObject.offset.bottom
    );
  }

  playAnimation(images) {
    let i = this.curentImage % images.length; // Schleife durch die Bilder
    let path = images[i];
    this.img = this.imageCache[path];
    this.curentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    console.log("Moving up");
  }
  moveDown() {
    console.log("Moving down");
  }
  jump() {
    this.speedY = 30;
  }
}
