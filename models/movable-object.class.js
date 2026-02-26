class MovabaleObject {
  x = 10;
  y = 280;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  curentImage = 0;
  speed = 0.15;
  otherdirection = false;
  speedY = 0;
  acceleration = 2.1;

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

  //load image from path
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
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
