/**
 * Interface for collections.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface ICollection {
  size (): number

  isEmpty (): boolean

  contains (object: any): boolean

  add (object: any): void

  remove (object: any): void

  addAll (objects: any[]): void

  clear (): void
}
