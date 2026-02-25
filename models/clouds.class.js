class Cloud extends MovabaleObject {
  y = 20;
  height = 250;
  width = 500;

  constructor() {
    super().loadImage("./assets/img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 500; // Zufällige Startposition auf der x-Achse
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
