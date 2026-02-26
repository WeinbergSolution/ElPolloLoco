class Level {
  enemies;
  clouds;
  backgroundObjects;
  level_end_x = 719 * 4 - 220;
  statusBar;

  constructor(enemies, clouds, backgroundObjects, statusBar) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.statusBar = statusBar;
  }
}
