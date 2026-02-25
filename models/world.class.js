class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectToMap(this.level.backgroundObjects);
    this.addObjectToMap(this.level.clouds);
    this.addObjectToMap(this.level.enemies);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

    // draw wird immer wieder aufgeruffenen, damit die Bewegungen der Charaktere sichtbar werden
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(movableObject) {
    if (movableObject.otherdirection) {
      this.flipImage(movableObject);
    }
    this.ctx.drawImage(
      movableObject.img,
      movableObject.x,
      movableObject.y,
      movableObject.width,
      movableObject.height,
    );

    if (movableObject.otherdirection) {
      movableObject.x = movableObject.x * -1; // Korrigieren der x-Position nach dem Spiegeln
      this.ctx.restore();
    }
  }

  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }
}
