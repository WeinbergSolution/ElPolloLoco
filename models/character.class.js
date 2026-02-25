class Character extends MovabaleObject {
  y = 180;
  width = 96;
  height = 250;
  speed = 4;
  IMAGES_WALKING = [
    "./assets/img/2_character_pepe/2_walk/W-21.png",
    "./assets/img/2_character_pepe/2_walk/W-22.png",
    "./assets/img/2_character_pepe/2_walk/W-23.png",
    "./assets/img/2_character_pepe/2_walk/W-24.png",
    "./assets/img/2_character_pepe/2_walk/W-25.png",
    "./assets/img/2_character_pepe/2_walk/W-26.png",
  ];
  world;

  constructor() {
    super().loadImage("./assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherdirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > -500) {
        this.x -= this.speed;
        this.otherdirection = true;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60); // ca. 60 FPS

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.x += this.speed;
        // Walk Animation
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 100); // ca. 10 FPS
  }

  jump() {
    console.log("Jumping");
  }
}
