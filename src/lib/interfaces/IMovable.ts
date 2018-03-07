import Vector2 from '../math/Vector2'

/**
 * Interface for movable entities.
 *
 * @author Daniel Peters
 * @version 1.0
 */

export default interface IMovable {
  velocity: Vector2
  acceleration: Vector2

  /**
   * Move entity.
   *
   * @param {number} dt Delta Time
   */
  move (dt: number): void
}
