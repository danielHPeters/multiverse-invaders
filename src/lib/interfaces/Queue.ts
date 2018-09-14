/**
 * Queue interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Queue {
  /**
   *
   * @returns {any}
   */
  poll (): any

  /**
   *
   * @returns {any}
   */
  peek (): any

  /**
   *
   * @param object
   */
  add (object: any): void
}
