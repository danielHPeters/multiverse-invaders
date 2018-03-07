/**
 * Game Loop interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface IGameLoop {
  /**
   * Start the loop.
   */
  start (): void

  /**
   * Stop the loop.
   */
  stop (): void

  /**
   * Restart the loop.
   */
  restart (): void

  /**
   * Toggle pause state.
   */
  togglePause (): void

  /**
   * Main Loop.
   *
   * @param {number} time
   */
  loop (time: number): void
}
