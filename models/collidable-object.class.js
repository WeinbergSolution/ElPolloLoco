/**
 * An Extension of MovableObjecz that can collide with other CollidableObjects.
 */

class CollidableObject extends MovabaleObject {
  /**
   * @type {boolean} - a flag to mark this instance as cllidable
   */
  colidable = true;

  /**
   * @type {number} - How Mutch damage can this instance cause to other Destroyableobjects
   */
  damage = 0;

  /**
   * @type {object} - numerical offsets for this instance's coordinates and * * *dimensions used for collision check.
   */
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * @function canCollide , to validate collision check
   * @type {boolean} - a flag to mark this instance as cllidable
   */
  canCollide() {}
}
