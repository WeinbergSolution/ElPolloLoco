class Chicken extends MovabaleObject {
  y = 380;
  width = 80;
  height = 50;
  IMAGES_WALKING = [
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  speed = 0.15;

  constructor() {
    super().loadImage(
      "./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    );
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 719 * 4; // Zufällige Startposition auf der x-Achse
    this.speed = 0.15 + Math.random() * 0.45; // Zufällige Geschwindigkeit zwischen 0.15 und 0.25
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200); // ca. 10 FPS
  }
}
