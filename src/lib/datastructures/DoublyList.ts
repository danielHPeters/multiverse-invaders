export class DoublyList {
  private _head
  private _elementsCount: number

  constructor () {
    this._head = null
    this._elementsCount = 0
  }

  get head () {
    return this._head
  }

  set head (value) {
    this._head = value
  }

  get elementsCount (): number {
    return this._elementsCount
  }

  set elementsCount (value: number) {
    this._elementsCount = value
  }
}