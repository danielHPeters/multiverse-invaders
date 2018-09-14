/**
 * Interface for movable entities.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Movable {

  /**
   * Move entity.
   *
   * @param {number} dt Delta Time
   */
  move (dt: number): void
}
