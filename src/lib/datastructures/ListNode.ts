export class ListNode {
  private _data
  private _next

  constructor (data) {
    this._data = data
    this._next = null
  }

  get data () {
    return this._data
  }

  set data (value) {
    this._data = value
  }

  get next () {
    return this._next
  }

  set next (value) {
    this._next = value
  }
}
