/**
 * Queue interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface IQueue {
  poll (): any

  peek (): any

  add (object: any): void
}
