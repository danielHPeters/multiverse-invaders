/**
 * List node element class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ListNode {
  private _data
  private _next: ListNode

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

  get next (): ListNode {
    return this._next
  }

  set next (value: ListNode) {
    this._next = value
  }
}
