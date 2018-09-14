import Collection from './Collection'

/**
 * List interface.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface List extends Collection {
  set (index: number, value: any): void

  get (index: number): any

  removeAt (index: number): void
}
